import * as fs from 'fs';
import { join } from 'path';
import { RunStateFileInterface, RunStateInterface } from '../interface/run-state.interface';
import { findIndex, omit } from 'lodash';

const runState: RunStateInterface = {
  resolved: [],
  resolvedFiles: {},
  resolvedDirectories: [],
};
let hasRunned = false;
/**
 * 获取上次执行状态
 */
export const getLastRunState = () => {
  const file = join(__dirname, '.tmp');
  return new Promise<RunStateInterface>((resolve, reject) => {
    if (!hasRunned && fs.existsSync(file)) {
      fs.readFile(file, (err: NodeJS.ErrnoException | null, data: Buffer) => {
        hasRunned = true;
        if (err) {
          reject(err);
        } else {
          const result = data.toString();
          try {
            Object.assign(runState, JSON.parse(result));
          } catch (e) {}
          resolve(runState);
        }
      });
    } else {
      resolve(runState);
    }
  });
};

/**
 * 保存执行状态至临时文件
 */
export const saveRunningState = () => {
  return new Promise((resolve, reject) => {
    const writeContent = JSON.stringify(runState);
    fs.writeFile(join(__dirname, '.tmp'), writeContent, (err: NodeJS.ErrnoException | null) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// 目录是否已经处理ok
export const directoryIsResolved = (directory: string) => {
  return runState.resolvedDirectories.includes(directory);
};

// 判断某一个api是事处理ok了
export const apiIsResolved = (apiId: string) => {
  return runState.resolved.includes(apiId);
};

/**
 * 文件处理状态
 * @param cate
 * @param info
 */
export function resolvedFile(cate: { directory: string; directoryName: string }, info: RunStateFileInterface) {
  let filesList = runState.resolvedFiles[cate.directory];
  if (!filesList) {
    filesList = runState.resolvedFiles[cate.directory] = {
      files: [],
      name: cate.directoryName,
    };
  }
  if (findIndex(filesList.files, { apiName: info.apiName }) === -1) {
    filesList.files.push(info);
  }
}

/**
 *
 * @param directory
 */
export function resolvedDirectory(directory: string) {
  if (!directoryIsResolved(directory)) {
    runState.resolvedDirectories.push(directory);
  }
}

/**
 *
 * @param api
 */
export function resolvedApi(api: string) {
  if (!apiIsResolved(api)) {
    runState.resolved.push(api);
  }
}
