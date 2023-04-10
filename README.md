# [항해99] 3. 실전 프로젝트 계획표

<aside>
💡 항해 99 미니 프로젝트 D반 1조 팀원들의
실전 프로젝트 코딩 에 대한 내용을 기입하는 S.A. 페이지 입니다.

</aside>

## 0. 목차

**1. 프로젝트 명**

**2. 팀원**

**3. 소개**

**4. 와이어프레임**

**5.프로그램 세팅 및 작업**

**6. API**

**7. 기능구현 분담**

**8. 서버와 데이터베이스의 관계도**

---

## 프로젝트 명

<aside>
💁🏻‍♂️ AMU WIKI (아무 위키)

</aside>

## 팀원

<aside>
💁🏻‍♂️ 팀원 목록표


![image](https://user-images.githubusercontent.com/92284361/227670354-eaa32348-5824-4290-82d3-9f1862194eac.png)


</aside>

## 소개

<aside>
💁🏻‍♂️ elasticSearch 를 사용한 NoSQL 기반의 데이터 검색과 
서버 이중화와 로드 밸런싱, 보안까지 고려해 설계하여 만든 위키백과의 한 종류 입니다.

기존 위키백과 사이트와의 차별점을 둔 부분은 
백엔드에서 Fastify - mongodb - elasticSearch, 
프론트엔드에서  react - vite 를 활용해 속도 개선에 주로 집중 했으며,
기존의 위키 백과처럼 검색 시에 하나만 검색해오는게 아니라 구글처럼 키워드와
관련된 데이터를 가져오고 고를 수 있게 만들었습니다.
또한, 새로운 위키백과 데이터를 import 할 수 있도록 하였습니다.

</aside>

## 와이어프레임

[Amuwiki_와이어프레임_수정본_230317.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1f6ae2f-33f0-4812-a540-c2e29691790e/Amuwiki_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84_%EC%88%98%EC%A0%95%EB%B3%B8_230317.pdf)


---

## 프로그램 세팅 및 작업

<aside>
🛠 프로그램 세팅 및 작업

- **GitHub Link**
    
    BE: [https://github.com/LKW9/AMU_BE/tree/develop](https://github.com/LKW9/AMU_BE/tree/develop)
    
    FE: [https://github.com/LKW9/AMU_FE/tree/develop](https://github.com/LKW9/AMU_FE/tree/develop)
    

- **Stack**
    
    
    <aside>
🔗 BackEnd_Stack

![image](https://user-images.githubusercontent.com/92284361/227672341-89144403-bb92-46e0-b7a2-91583a789470.png)

    

- **ERD**
    
![mongoDB hackolade](https://user-images.githubusercontent.com/117289578/226113241-62171e24-f7a9-49ca-b573-0e9e8fd4d8ff.png)


- **npm**
    
```json
"@fastify/cookie": "^6.0.0",
"@fastify/multipart": "^7.5.0",
"@google-cloud/storage": "^6.9.4",
"@nestjs/common": "^9.0.0",
"@nestjs/config": "^2.3.1",
"@nestjs/core": "^9.0.0",
"@nestjs/elasticsearch": "^9.0.0",
"@nestjs/jwt": "^10.0.2",
"@nestjs/mongoose": "^9.2.1",
"@nestjs/passport": "^9.0.3",
"@nestjs/platform-fastify": "^9.3.9",
"@nestjs/swagger": "^6.2.1",
"@types/elasticsearch": "^5.0.40",
"@types/passport-jwt": "^3.0.8",
"bcrypt": "^5.1.0",
"class-transformer": "^0.5.1",
"class-validator": "^0.14.0",
"elasticsearch": "^16.7.3",
"fastify-cookie": "^5.7.0",
"fastify-multipart": "^5.4.0",
"fastify-static": "^4.7.0",
"mongoose": "^6.10.2",
"nest-fastify-multer": "^1.0.1",
"nodemailer": "^6.9.1",
"nodemailer-smtp-transport": "^2.7.4",
"passport-jwt": "^4.0.1",
"reflect-metadata": "^0.1.13",
"rxjs": "^7.2.0"
```
    

- **Code Review Time**
    - 아침조회 (오전 09시)
        
        전일 19시부터 금일 08시까지 구현한 코드 및 기능 전달,
        19시전까지 어떤걸 할건지 전달.
        
    - 중간조회 (오후 04시)
        
        중간 코드리뷰 실행
        
    - 일일결산 (오후 07시)
        
        아침조회부터 19시까지 작성한 코드 및 기능구현 전달,
        20시 혹은 21시 쯤에 있는 매니저 순회 전까지 질문할 질문내용을 정리.
        

</aside>

## API

<aside>

📃 API 표

![image](https://user-images.githubusercontent.com/92284361/227671111-9f394da7-708e-45ef-93ce-ecd0839b7b6d.png)
    
</aside>

## **기능구현 분담**

<aside>
🙋🏻‍♂️  Dividing the implementation of Infrastructure features.

- 이기웅
    - Virtualization Technology
        
        Docker
        
    - AWS
    - GitHub Action
- 정붕기
    - Virtualization Technology
        
        Docker
        
    - ElasticSearch
    - AWS
- 주재훈
    - Virtualization Technology
        
        Docker-compose
        
    - MongoDB manager
        
        Managing DB
        
    - Cloud Database
        
        google-cloud/storage
        
    - AWS
        - https - Enable certification
            
            Testing VPC
            
- 한창윤
    - Virtualization Technology
        
        Docker
        
    - ElasticSearch
    - AWS
        
        
- 조현수
    - Virtualization Technology
        
        Docker
        
    - Deployment
        
        EC2
        
    - AWS
        
        
</aside>

<aside>
🙋🏻‍♂️ Dividing the implementation of Server features.

- 이기웅
    1. View user profile
    2. Edit user profile - nickname, password
    3. Upload profile photo
    4. Edit profile photo
    
- 조현수
    1. Retrieve a post
    2. Create a post
    3. Edit a post
    4. Delete a post

- 주재훈
    1. Send email verification code
    2. Verify email address
    3. User signup
    4. User login
    5. User logout
    6. User withdrawal
    
- 정붕기
    1. Elasticsearch
    2. Vite+React

- 한창윤
    1. Elasticsearch
    
</aside>


## Architecture

![Lv1_1](https://user-images.githubusercontent.com/92284361/230899525-81fe98ae-8687-4df7-a568-67e5dc9d7f45.png)




---
