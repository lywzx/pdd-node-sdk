import { formatDate, timestamp } from '../../src/util';
import { expect } from 'chai';
import { times, unzip } from 'lodash';

describe('#formatDate test util', function() {
  let date: Date;
  before(function() {
    date = new Date(1596373294000);
  });

  it('should get date', function() {
    const formats = times(4, i => ''.padStart(i + 1, 'd'));
    const results = ['2', '02', 'Sun', 'Sunday'];

    for (const [f, r] of unzip([formats, results])) {
      expect(formatDate(date, f)).to.be.eq(r);
    }
  });

  it('should get moth', function() {
    const formats = times(4, i => ''.padStart(i + 1, 'M'));
    const results = ['8', '08', 'Aug', 'August'];

    for (const [f, r] of unzip([formats, results])) {
      expect(formatDate(date, f)).to.be.eq(r);
    }
  });

  it('should get year', function() {
    for (const [f, r] of [
      ['yy', '20'],
      ['yyyy', '2020'],
    ]) {
      expect(formatDate(date, f)).to.be.eq(r);
    }
  });

  it('should get hours', function() {
    const timeZone = new Date().getTimezoneOffset() / 60;
    for (const [f, r] of [
      ['h', (1 - timeZone).toString()],
      ['hh', (1 - timeZone).toString().padStart(2, '0')],
      ['H', (13 - timeZone).toString()],
      ['HH', (13 - timeZone).toString().padStart(2, '0')],
    ]) {
      expect(formatDate(date, f)).to.be.eq(r);
    }
  });

  it('should get minutes', function() {
    for (const [f, r] of [
      ['m', '1'],
      ['mm', '01'],
    ]) {
      expect(formatDate(date, f)).to.be.eq(r);
    }
  });

  it('should get seconds', function() {
    for (const [f, r] of [
      ['s', '34'],
      ['ss', '34'],
    ]) {
      expect(formatDate(date, f)).to.be.eq(r);
    }
  });

  it('should get Milliseconds', function() {
    for (const [f, r] of [
      ['l', '000'],
      ['L', '00'],
    ]) {
      expect(formatDate(date, f)).to.be.eq(r);
    }
  });

  it('should get am, pm', function() {
    for (const [f, r] of [
      ['tt', 'pm'],
      ['TT', 'PM'],
    ]) {
      expect(formatDate(date, f)).to.be.eq(r);
    }
  });

  it('should get Z', function() {
    expect(formatDate(date, 'Z')).to.be.eq('GMT');
  });

  it('should get default', function() {
    expect(formatDate(date, 'yy-123456')).to.be.eq('20-123456');
  });
});

describe('#timestamp test util', function() {
  it('should equal timestamp with ', function() {
    expect(timestamp(new Date())).to.be.eq(Date.parse(new Date().toString()) / 1000);
  });
});
