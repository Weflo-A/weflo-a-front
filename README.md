# ✈ Weflo(위플로) 기업 프로젝트

![image](https://github.com/Weflo-A/weflo-a-front/assets/102593738/f9e7c53b-e562-427e-b387-e14c197e9539)


**프로젝트 기간**
: 2024.02.20 ~ 2024.03.10

**개발 기간**
: 2024.03.01 ~ 2024.03.10

🖥️
[프로젝트 결과물 확인하기](http://weflow-a-bucket.s3-website.ap-northeast-2.amazonaws.com/monitoring/drone-search) (데스크탑/노트북/태블릿 환경에서 이용 가능)<br>

📔
[Weflo A조 프론트 개발 파트 노션](https://octagonal-guppy-90d.notion.site/6da7670140354df48e234d19d5fedc3e)
<br><br>

# ✈ 프로젝트 소개
> **Weflo 기업소개**<br>
드론/UAM 운영 사업 고객의 Pain point를 해결하기 위한 혁신적인 진단케어 솔루션, “버티핏(verti-pit)”을 제공하여 드론의 고장원인 및 성능에 대한 평가를 진행하는 기업입니다.<br>
AI 진단/예지 알고리즘으로 대량 드론 점검 시 많은 인력과 시간 투입으로 발생하는 높은 운영비를 절감해주는 서비스를 운영하고 있습니다.
>

## 🧡 주제
**드론 점검 서비스에 연결될 신규 서비스와 비지니스 모델 기획 및 프로토타입 개발**<br>
본 프로젝트에서 저희는 위플로 서비스가 제공하는 가치를 향상시켜, 신규 사용자(드론 서비스 사용자)를 유치할 수 있는 서비스를 기획하고, [관련 프로토타입 페이지](http://weflow-a-bucket.s3-website.ap-northeast-2.amazonaws.com/monitoring/drone-search)를 제작하였습니다.
<br><br>

- 기존 **대시보드**의 기능 구성의 문제점을 개선하여 부품별 점수 추이, 고장유형 및 수명 파악 등에 대한 **효과적인 데이터 시각화**를 통해 사용자에게 더 유용한 UI 서비스를 제공합니다.
- 위플로우가 제공하는 ‘버티핏’ 서비스에서의 진단 데이터를 기반으로 **견적서**를 제공하여 **교체할 부품에 대한 정보**를 점수나 가격 범위에 따라 설정해 필터링하고, 추가로 **수리업체 정보** 및 **폐기 전 재사용 가능 부품**을 제공합니다.
- 드론 진단결과에서 추출한 교체된 부품을 기반으로 **투입비용**을 계산하여, **투입비용 현황**과 **부품 예측관리**, **부품 구매**를 도와주는 부품 관련 서비스를 이용할 수 있습니다.
<br>


# ✈ 프로젝트 기획 배경
<img src="https://github.com/Weflo-A/weflo-a-front/assets/102593738/2fc09455-657c-4dc5-b30f-ce2f99ba436a" width="70%" />
<img src="https://github.com/Weflo-A/weflo-a-front/assets/102593738/b51d188c-304e-4013-9163-6ef5cc654b09" width="70%" />
<img src="https://github.com/Weflo-A/weflo-a-front/assets/102593738/25c3d848-c657-442c-b5af-3eb1cfd11887" width="70%" />
<img src="https://github.com/Weflo-A/weflo-a-front/assets/102593738/4a856f09-33ce-47be-bf70-d8bc96d21d21" width="70%" />
<br>

<br>

# ✈ 핵심 기능

### 🧡 모니터링
- 드론 모델별, 연식별, 그룹별 검색이 가능합니다.
- 그룹 정보 분석 및 그룹별 드론 평균 상태 분석으로 편리한 드론 목록 관리가 가능합니다.<br><br>
<img src="https://github.com/Weflo-A/weflo-a-front/assets/102593738/1c3c4a74-70ad-48b1-8fb0-f85ef732f064" width="50%" /><img src="https://github.com/user-attachments/assets/d2845512-ae3f-46ce-8972-354ba774966b" width="50%" />
<br>

### 🧡 대시보드
- 메인 페이지에서는 부품 점수 추이를 통한 예상 진단일 정보, 진단 일시별 관리 및 견적서 확인, 또한 고장 유형과 평균 수명 파악을 통해 부품을 관리할 수 있습니다.
- 상세 페이지에서는 부품별 정렬을 통한 체계적인 관리와 효과적인 데이터 시각화로 빠른 부품 교체 우선순위를 결정할 수 있습니다.<br><br>
<img src="https://github.com/user-attachments/assets/c08ed835-9029-495f-8b83-95971a723f68" width="50%" />
<br>

### 🧡 견적서
- 제공된 진단 데이터에서 얻은 교체가 필요한 부품들을 점수와 가격 범위에 따라 필터링할 수 있고, 구매를 원하는 부품들을 선택해 장바구니에 담을 수 있습니다.
- 또한, 수리업체 정보 및 페기 전 재사용 가능 부품 목록을 제공합니다.
<img src="https://github.com/user-attachments/assets/09f0b2ac-d7e6-41af-b35c-08aa441bea26" width="50%" />
<br>

### 🧡 부품
- 그룹별 누적 비용 순위와 전체 투입 비용을 제공합니다.
- 부품 예측 관리를 통해 필요한 부품들의 수량을 기간 및 종류별로 한눈에 보여줍니다.
- 부품 예측을 토대로 우선순위에 따른 부품 추천 서비스를 제공합니다.
<img src="https://github.com/user-attachments/assets/efc1fd94-9b3a-420f-80ef-b0b50c6bc870" width="50%" />
<br>
<br>

# ✈ Team Weflo A

### 기획 / 디자인 
| PM | 기획 | 기획 | 디자인 | 디자인 |
| --- | --- | --- | --- | --- |
| 김대헌 | 김서연 | 배예진 | 김은정 | 김승은 |

### 개발 
#### - Front-end (React 🌐)

| <img src="https://avatars.githubusercontent.com/u/89841486?v=4" width=90px alt="이효원"/> | <img src="https://avatars.githubusercontent.com/u/102593738?v=4" width=90px alt="유진주"/> |
| --- | --- |
| [이효원](https://github.com/ymj07168) | [유진주](https://github.com/yyypearl) |

#### - Back-end (Spring 🌱)

| <img src="https://avatars.githubusercontent.com/u/104913654?v=4" width=90px alt="김용현"/> | <img src="https://avatars.githubusercontent.com/u/96872852?v=4" width=90px alt="배현서"/> |
| --- | --- |
| [김용현](https://github.com/whereami2048) | [배현서](https://github.com/qogustj) |

<br>

# ✈ Web 파트 역할

### 👩🏻‍💻 이효원
- *Web 파트장*
- 모니터링 > 드론 그룹 정보
- 대시보드 > 상세
- 견적서

### 👩🏻‍💻 유진주
- 모니터링 > 드론 조회
- 대시보드 > 메인
- 부품
<br>

# ✈ Web 기술 스택 및 구조
<br>
