# LlamaVista

데이터 분석 자동화 서비스! 👉

해당 페이지는 프로젝트의 Front-end 소스코드 페이지 입니다. 모든 소스코드는 아래의 링크를 참고해주세요!
> project source code: https://github.com/LlamaVista/LlamaVista/tree/main

<img width="1512" alt="산점도" src="https://github.com/user-attachments/assets/af91ad90-ecb9-407f-aaa2-b331247a72ea">

## 📖 Description

VISTA는 대규모 언어 모델(LLM)을 기반으로 한 데이터 분석 자동화 서비스입니다.

사용자가 제출한 파일을 인공지능이 분석하고 대화를 통해 인공지능과 상호작용하며 데이터 분석을 고도화해 나갈 수 있습니다.

노코드 형식의 프롬프트를 통해 코드작성 없이도 전문적인 데이터 분석이 가능합니다!

## ⭐ Main Feature
### 데이터 분석 기능
- csv, json, txt 등 다양한 파일 분석 지원
- 분석 방향 제시
- 데이터 시각화 이미지 제공(그래프, 산점도 등)
- 분석 코드 제공
- 스트리밍을 통한 실시간 응답 지원

### 회원가입 및 로그인 
- token 기반 로그인
- google 로그인

### 기타 기능
- 채팅 기록 저장
- 반응형 웹
- 분석 샘플 파일 제공
- 제출 파일 다운로드
- 로그아웃

## 💻 Getting Started

배포된 링크 🔗 로 접속!

### 회원가입 후 로그인 진행

<img width="800" alt="로그인" src="https://github.com/user-attachments/assets/c7668091-c8cf-4f8d-977d-7f10ceafca27">

### 분석할 파일 제출
car, house, iris 와 관련된 샘플 데이터로 분석을 진행해 볼 수 있습니다

<img width="800" alt="파일업로드" src="https://github.com/user-attachments/assets/367a528f-4891-4dd7-8002-4c4d425bb7cd">

### 데이터 분석 진행
- 대화 입력창을 통해 인공지능과 대화하며 다양한 형식으로 데이터 분석을 진행할 수 있습니다
- 데이터 분석을 통해 알게된 인사이트로 추가적인 파일을 채팅방에 제출하며 분석을 고도화해 나갈 수 있습니다
- 시각화 된 자료가 필요한 경우 생성할 수 있습니다

<img width="1510" alt="분석예시" src="https://github.com/user-attachments/assets/37e34bb3-3941-409a-8111-e8cbd593d5c4">


## 🔧 Stack

### FE 
- **Language**: TypeScript
- **Library & Framework** : React, React-rocoil, React-Query, styled-components

### BE 
- **Language**: Python
- **Library & Framework** : Fastapi, Pymongo
- **Deploy**: AWS EC2

### ML 
- **Hardware & OS env**: DGX-Station(A100*8), Ubuntu 20.04, CUDA 11.8
- **Language**: Python
- **Library & Framework** : torch, transformers, accelerate, sentencepiece, langchain


## 👨‍💻 Role & Contribution

**Frontend** (👨🏻‍💻 [seoungJun](https://github.com/seo-seoungjun))

- 사용자 페이지 디자인(Figma) 및 개발(React.js)
- 데이터베이스 스키마 설계
- API 설계
- Project Management 및 이슈 관리

**BackEnd** (👨🏻‍💻 [cshoon](https://github.com/cshooon))

- REST Api 개발
- 서버 배포 및 관리

**ML** (👨🏻‍💻 [sabin](https://github.com/sabin5105))

- 인공지능 설계 및 개발
- MLOps
- RESTApi 개발

