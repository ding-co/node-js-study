const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);

const app = express();

app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: 60000,
    },
    store: new fileStore(),
  })
);

app.get('/', (req, res, next) => {
  console.log(req.session);
  res.send(req.session);
});

app.post('/login', (req, res, next) => {
  const { email, pw } = req.body.param;
  // DB의 사용자 테이블에서 로그인 인증 처리 코드 작성
  // 사용자가 존재하면 (로그인 처리 성공시)
  req.session.email = email; // 세션에 사용자 이메일 저장
  req.session.is_login = true; // 세션에 로그인 여부 저장
  req.session.save((err) => {
    // 세션 저장
    if (err) throw err;
    req.redirect('/home'); // 로그인 후 홈 화면으로 이동
  });
});

// 로그아웃 요청 시 세션 삭제 후 로그인 페이지로 이동
app.post('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/login');
});

app.listen(3000, () => {
  console.log('3000번 포트로 서버를 실행했습니다.');
});
