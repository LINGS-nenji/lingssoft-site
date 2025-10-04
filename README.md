# LINGSSOFT 홈페이지

LINGSSOFT 공식 홈페이지(템플릿 기반)

## 개요
이 저장소는 Creative Tim의 Material Kit 템플릿을 기반으로 제작된 LINGSSOFT 공식 홈페이지입니다. 템플릿은 유료로 구매하여 사용 중이며, 템플릿 소스 및 디자인 파일은 Creative Tim의 저작권이 적용됩니다.

## 빠른 시작
- 권장 Node.js 버전: 20 이상
- 패키지 매니저: npm (프로젝트는 package-lock.json을 사용합니다)

설치 및 개발 서버 실행:
```bash
# 클린 설치 (CI/빌드용 권장)
npm ci

# 개발 서버
npm start
```

빌드(배포용):
```bash
npm run build
# 빌드 결과는 build/ 폴더에 생성됩니다
```

간단한 정적 서빙(로컬 테스트):
```bash
# serve 패키지가 없다면 전역 설치 없이 실행
npx serve -s build -l 3002
```

## 환경 변수
- 민감값 및 환경별 설정은 `.env`에 두고 `.env.example`로 문서화하세요.
- `.env` 파일은 레포지토리에 커밋하지 마세요(기본적으로 .gitignore에 포함).

## 라이선스 및 주의사항
- 이 프로젝트는 Creative Tim의 프리미엄 템플릿(구매 기반)을 사용합니다. 구매한 라이선스(예: Freelancer)는 소스 파일을 수정하여 본인의 프로젝트에 사용할 수 있으나, 템플릿 파일 자체를 재배포하거나 템플릿 형태로 판매하는 행위는 금지됩니다.
- 팀 사용(접근 권한 범위)이나 재배포 계획이 있다면 라이선스 티어(Startup / Company / Enterprise) 업그레이드를 검토하세요.
- 상세 조건은 다음 링크에서 확인하세요: https://www.creative-tim.com/license

## 권장 유지보수 작업
1. 정기적으로 `npm audit`를 실행해 보안 취약점을 점검하세요.
2. 장기적으로는 `react-scripts` 기반(CRA)에서 Vite 같은 최신 번들러로 마이그레이션을 검토하면 개발 속도 및 번들 크기 개선에 도움이 됩니다.
3. `homepage` 필드와 배포 경로가 일치하는지 확인하세요(현재 package.json의 homepage: https://www.lingssoft.com).

## Docker / CI 참고
- 이미 Dockerfile / docker-compose가 있다면, CI에서는 `node:20`으로 명시하고 `npm ci` + `npm run build`를 실행하세요.
