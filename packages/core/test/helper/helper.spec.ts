import { expect } from 'chai';
import { extractIndex, isEncryptData } from '../../src';

describe('helper util', function () {
  it('#isEncryptData data is not encrypt', function () {
    expect(isEncryptData('')).to.be.false;
    expect(isEncryptData('abcdefg')).to.be.false;
    expect(isEncryptData('abcdefa')).to.be.false;
    expect(isEncryptData('$7AnwZJ1e6BZc$AAAAAADkt0hgZkt6KLklIDxVp+F1wzHsRsPUw0s19fk=$2$$')).to.be.true;
    expect(isEncryptData('$189$AAAAAADkt0gJgFdp5xLPYg8vGhYcx174rbTSA6WaxqQ=$2$')).to.be.true;
    expect(isEncryptData('~AgAAAADKjN8Fxyy8TAA2GT4semn+oppvkOnDgjwueuQ=~vXhtOs+oximw~2~~')).to.be.true;
    expect(isEncryptData('~AgAAAADKjN8FgT6V/QApofulPtD+WnmneRmB3ATUQDo=~QfFq~2~~')).to.be.true;
    expect(isEncryptData('~AgAAAADKjN8Fzce1DgCER+fFrxbTlgQV9GSaGZCcNxI=~vXhtOs+oximw~2~~')).to.be.true;
    expect(isEncryptData('$TtMyyvuwCTgl$AgAAAADKjN8Gxyy8TADS9L8EPNs56SAn7sOt1JBMsC8=$2$$')).to.be.true;
  });

  it('#extractIndex', function () {
    expect(extractIndex('$7AnwZJ1e6BZc$AAAAAADkt0hgZkt6KLklIDxVp+F1wzHsRsPUw0s19fk=$2$$')).to.be.eq('7AnwZJ1e6BZc');
  });
});
