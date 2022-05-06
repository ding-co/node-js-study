const crypto = require('crypto');
const hash1 = crypto.createHash('sha512').update('pw1234').digest('base64');
const hash2 = crypto.createHash('sha512').update('pw1234').digest('hex');

// salt 생성
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString('base64'));
    });
  });
};

// salt를 이용해서 비빌번호를 암호화하는 함수
const createCryptoPassword = async (plainPassword) => {
  const salt = await createSalt();
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString('base64'), salt });
    });
  });
};

// 사용자가 입력한 비밀번호와 DB에 저장된 salt 값을 이용하여 암호화된 비밀번호 값 얻기
const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString('base64'), salt });
    });
  });
};
