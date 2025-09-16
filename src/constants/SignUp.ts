import type { EducationEnumType, JobGroupEnumType, JobPositionEnumType, TransportEnumType } from '@/types/signup.ts'

export const levelOfEducationConstants: {kor: string; enum: EducationEnumType}[] = [
  { kor: '고졸', enum: 'HIGH_SCHOOL' },
  { kor: '초대졸', enum: 'JUNIOR_COLLEGE' },
  { kor: '학사', enum: 'BACHELOR' },
  { kor: '석사', enum: 'MASTER' },
  { kor: '박사', enum: 'DOCTOR' },
  { kor: '무관', enum: 'IRRELEVANT' },
]
export const category1Constants: {kor: string; enum: JobGroupEnumType}[] = [
  { kor: 'IT·개발', enum: 'IT_개발' },
  { kor: 'AI·데이터', enum: 'AI_데이터' },
  { kor: '엔지니어링·R&D', enum: '엔지니어링_연구_RND' },
  { kor: '건설·건축', enum: '건설_건축' },
  { kor: '생산·기능직', enum: '생산_기능' },
]
export const category2Constants: {kor: string; enum: JobGroupEnumType}[] = [
  { kor: '법률·법무', enum: '법률_법무' },
  { kor: '증권·운용', enum: '증권_운영' },
  { kor: '은행·카드·보험', enum: '은행_보험_카드_캐피탈' },
  { kor: '의료·보건', enum: '의료_보건' },
  { kor: '공공·복지', enum: '공공_복지' },
  { kor: '교육', enum: '교육' },
  { kor: '식음료', enum: '식음료' },
]
export const category3Constants: {kor: string; enum: JobGroupEnumType}[] = [
  { kor: '마케팅·광고', enum: '마케팅_광고_홍보' },
  { kor: '디자인', enum: '디자인' },
  { kor: '게임', enum: '게임' },
  { kor: '미디어·엔터', enum: '미디어_엔터' },
  { kor: '고객상담·TM', enum: '고객상담_TM' },
  { kor: '서비스', enum: '서비스' },
]
export const category4Constants: {kor: string; enum: JobGroupEnumType}[] = [
  { kor: '기획·전략', enum: '기획_전략_경영' },
  { kor: '상품기획·MD', enum: '상품기획_MD' },
  { kor: '영업', enum: '영업' },
  { kor: '무역·물류', enum: '무역_물류_유통' },
  { kor: '운송·배송', enum: '운송_배송' },
  { kor: '회계·재무·세무', enum: '회계_세무_재무' },
  { kor: 'HR·총무', enum: '인사_노무_HRD_총무' },
]

// 직무 선택

/**
 * IT_개발
 */
export const ITConstants: {kor: string; enum: JobPositionEnumType}[] = [
    { kor: '전체', enum: '전체' },
    { kor: '서버·백엔드', enum: '서버_백엔드' },
    { kor: '프론트엔드', enum: '프론트엔드' },
    { kor: '웹풀스택', enum: '웹풀스택' },
    { kor: '안드로이드', enum: '안드로이드' },
    { kor: 'iOS', enum: 'iOS' },
    { kor: '크로스_플랫폼', enum: '크로스_플랫폼' },
    { kor: 'DBA', enum: 'DBA' },
    { kor: 'DevOps·SRE', enum: 'DevOps_SRE' },
    { kor: '시스템·네트워크', enum: '시스템_네트워크' },
    { kor: '시스템소프트웨어', enum: '시스템소프트웨어' },
    { kor: '소프트웨어 엔지니어', enum: '소프트웨어_엔지니어' },
    { kor: '정보보호·보안', enum: '정보보호_보안' },
    { kor: '임베디드 소프트웨어', enum: '임베디드소프트웨어' },
    { kor: '로봇SW', enum: '로봇SW' },
    { kor: 'QA·테스트', enum: 'QA_테스트' },
    { kor: '사물인터넷(IoT)', enum: '사물인터넷_IoT' },
    { kor: '응용 프로그램', enum: '응용_프로그램' },
    { kor: '블록체인', enum: '블록체인' },
    { kor: '개발PM', enum: '개발PM' },
    { kor: '웹 퍼블리싱', enum: '웹퍼블리싱' },
    { kor: 'VR·AR·3D', enum: 'VR_AR_3D' },
    { kor: 'ERP·SAP', enum: 'ERP_SAP' },
    { kor: '그래픽스', enum: '그래픽스' },
    { kor: '하드웨어엔지니어', enum: '하드웨어엔지니어' },
    { kor: '기타IT·개발', enum: '기타IT_개발' },
  ]
export const AIConstants: {kor: string; enum: JobPositionEnumType}[] = [
    { kor: '전체', enum: '전체' },
    { kor: '데이터 분석가', enum: '데이터_분석가' },
    { kor: '데이터 사이언티스트', enum: '데이터_사이언티스트' },
    { kor: '데이터 엔지니어', enum: '데이터_엔지니어' },
    { kor: '머신러닝 엔지니어', enum: '머신러닝_엔지니어' },
    { kor: '멀티모달엔지니어', enum: '멀티모달엔지니어' },
    { kor: '생성형AI', enum: '생성형AI' },
    { kor: '영상·음성AI', enum: '영상_음성AI' },
    { kor: '자율주행', enum: '자율주행' },
    { kor: '컴퓨터 비전', enum: '컴퓨터비전' },
    { kor: 'AI 비즈니스', enum: 'AI_비즈니스' },
    { kor: 'AI 서비스 기획', enum: 'AI_서비스_기획' },
    { kor: 'AI리서치', enum: 'AI리서치' },
    { kor: 'NLP', enum: 'NLP' },
    { kor: 'LLM', enum: 'LLM' },
    { kor: 'MLOps', enum: 'MLOps' },
    { kor: 'RAG', enum: 'RAG' },
    { kor: '기타AI·데이터', enum: '기타AI_데이터' },
  ]
export const engineeringConstants: {kor: string; enum: JobPositionEnumType}[] = [
    { kor: '전체', enum: '전체' },
    { kor: '반도체·디스플레이', enum: '반도체_디스플레이' },
    { kor: '전기·전자·제어', enum: '전기_전자_제어' },
    { kor: '통신기술·네트워크구축', enum: '통신기술_네트워크구축' },
    { kor: '기계', enum: '기계' },
    { kor: '기계설계·CAD', enum: '기계설계_CAD' },
    { kor: '자동차', enum: '자동차' },
    { kor: '조선·항공·우주', enum: '조선_항공_우주' },
    { kor: '금속·철강', enum: '금속_철강' },
    { kor: '화학', enum: '화학' },
    { kor: '화장품', enum: '화장품' },
    { kor: '바이오·제약', enum: '바이오_제약' },
    { kor: '식품', enum: '식품' },
    { kor: '에너지', enum: '에너지' },
    { kor: '환경', enum: '환경' },
    { kor: '기타엔지니어링·R&D', enum: '기타엔지니어링_RnD' },
  ]
export const architectureConstants: {kor: string; enum: JobPositionEnumType}[] = [
    { kor: '전체', enum: '전체' },
    { kor: '건축설계·시공', enum: '건축설계_시공' },
    { kor: '토목·측량·조경·환경', enum: '토목_측량_조경_환경' },
    { kor: '기계·전기·소방·설비', enum: '기계_전기_소방_설비' },
    { kor: '설계·감리·시공·공무', enum: '설계_감리_시공_공무' },
    { kor: '안전·품질·재료', enum: '안전_품질_재료' },
    { kor: '사무·관리·전산', enum: '사무_관리_전산' },
    { kor: '건설특수·일용직', enum: '건설특수_일용직' },
    { kor: '기타건설·건축', enum: '기타건설_건축' },
  ]
/**
 * 생산·기능직
 */
export const manufacturingConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '생산', enum: '생산' },
  { kor: '공무', enum: '공무' },
  { kor: '설비', enum: '설비' },
  { kor: '환경안전', enum: '환경안전' },
  { kor: '물류', enum: '물류' },
  { kor: '품질', enum: '품질' },
  { kor: '건설·공사·프로젝트', enum: '건설_공사_프로젝트' },
  { kor: '설계·CAD·CAM', enum: '설계_CAD_CAM' },
  { kor: '시설관리', enum: '시설관리' },
  { kor: '기타생산·기능직', enum: '기타생산_기능직' },
]

/**
 * 법률·법무
 */
export const legalConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '변호사', enum: '변호사' },
  { kor: '변리사', enum: '변리사' },
  { kor: '법무', enum: '법무' },
  { kor: '컴플라이언스', enum: '컴플라이언스' },
  { kor: '내부감사', enum: '내부감사' },
  { kor: 'ESG·윤리', enum: 'ESG_윤리' },
  { kor: '특허·IP', enum: '특허_IP' },
  { kor: '기타법률', enum: '기타법률' },
]

/**
 * 증권·운용
 */
export const securitiesConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '운용·트레이딩', enum: '운용_트레이딩' },
  { kor: '리스크·준법·심사', enum: '리스크_준법_심사' },
  { kor: 'VC·PE', enum: 'VC_PE' },
  { kor: '증권IB', enum: '증권IB' },
  { kor: '부동산·인프라금융', enum: '부동산_인프라금융' },
  { kor: 'PB·WM', enum: 'PB_WM' },
  { kor: '경영지원·관리', enum: '경영지원_관리' },
  { kor: '금융상품개발·영업', enum: '금융상품개발_영업' },
  { kor: '기타증권·운용', enum: '기타증권_운용' },
]

/**
 * 은행·카드·보험
 */
export const financeConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '은행', enum: '은행' },
  { kor: '카드사', enum: '카드사' },
  { kor: '캐피탈', enum: '캐피탈' },
  { kor: '보험설계', enum: '보험설계' },
  { kor: '계리', enum: '계리' },
  { kor: '손해사정', enum: '손해사정' },
  { kor: '언더라이팅·심사', enum: '언더라이팅_심사' },
  { kor: '청구·보상', enum: '청구_보상' },
  { kor: '보험상품개발', enum: '보험상품개발' },
  { kor: '기타은행·보험', enum: '기타은행_보험' },
]

/**
 * 의료·보건
 */
export const medicalConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '의사', enum: '의사' },
  { kor: '한의사', enum: '한의사' },
  { kor: '수의사', enum: '수의사' },
  { kor: '약사·약무보조', enum: '약사_약무보조' },
  { kor: '간호사', enum: '간호사' },
  { kor: '간호조무사', enum: '간호조무사' },
  { kor: '치위생사', enum: '치위생사' },
  { kor: '응급구조사', enum: '응급구조사' },
  { kor: '물리치료·작업치료', enum: '물리치료_작업치료' },
  { kor: '영상의학·임상병리·검사', enum: '영상의학_임상병리_검사' },
  { kor: '영양사·임상영양사', enum: '영양사_임상영양사' },
  { kor: '의료미용·에스테틱', enum: '의료미용_에스테틱' },
  { kor: '병원행정·접수·수납', enum: '병원행정_접수_수납' },
  { kor: '요양보호사', enum: '요양보호사' },
  { kor: '조리원', enum: '조리원' },
  { kor: '안경·검안사', enum: '안경_검안사' },
  { kor: '기타의료·보건', enum: '기타의료_보건' },
]

/**
 * 공공·복지
 */
export const publicServiceConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '행정·사무·운영', enum: '행정_사무_운영' },
  { kor: '기술·전산·시설', enum: '기술_전산_시설' },
  { kor: '복지·사회서비스', enum: '복지_사회서비스' },
  { kor: '교육·연구', enum: '교육_연구' },
  { kor: '공공안전', enum: '공공안전' },
  { kor: '상담·심리', enum: '상담_심리' },
  { kor: '종교', enum: '종교' },
  { kor: '아동·청소년복지', enum: '아동_청소년복지' },
  { kor: '노인·여성복지', enum: '노인_여성복지' },
  { kor: '자원봉사', enum: '자원봉사' },
  { kor: '기타공공·복지', enum: '기타공공_복지' },
]

/**
 * 교육
 */
export const educationConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '유치원·보육교사', enum: '유치원_보육교사' },
  { kor: '기간제·사립교사', enum: '기간제_사립교사' },
  { kor: '방과후·사립교사', enum: '방과후_사립교사' },
  { kor: '대학교수·강사', enum: '대학교수_강사' },
  { kor: '교직원·조교', enum: '교직원_조교' },
  { kor: '입시학원강사', enum: '입시학원강사' },
  { kor: '국어·외국어강사', enum: '국어_외국어강사' },
  { kor: '기술·전문강사', enum: '기술_전문강사' },
  { kor: '학습지·방문교사', enum: '학습지_방문교사' },
  { kor: '학원상담·운영', enum: '학원상담_운영' },
  { kor: '교재개발·교수설계', enum: '교재개발_교수설계' },
  { kor: '기타교육', enum: '기타교육' },
]

/**
 * 식음료
 */
export const foodAndBeverageConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '식품가공·개발', enum: '식품가공_개발' },
  { kor: '주방조리', enum: '주방조리' },
  { kor: '제과·제빵', enum: '제과_제빵' },
  { kor: '음료·주류', enum: '음료_주류' },
  { kor: '매장운영·관리', enum: '매장운영_관리' },
  { kor: '서비스·홀스태프', enum: '서비스_홀스태프' },
  { kor: '식음컨설팅·지원', enum: '식음컨설팅_지원' },
  { kor: '기타식음료', enum: '기타식음료' },
]

/**
 * 마케팅·광고
 */
export const marketingConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '마케팅기획·전략', enum: '마케팅기획_전략' },
  { kor: '퍼포먼스 마케팅', enum: '퍼포먼스마케팅' },
  { kor: '콘텐츠마케팅', enum: '콘텐츠마케팅' },
  { kor: 'SNS마케팅', enum: 'SNS마케팅' },
  { kor: '브랜드 마케팅', enum: '브랜드마케팅' },
  { kor: 'CRM마케팅', enum: 'CRM마케팅' },
  { kor: '글로벌 마케팅', enum: '글로벌마케팅' },
  { kor: '광고기획(AE)', enum: '광고기획_AE' },
  { kor: '홍보·PR', enum: '홍보_PR' },
  { kor: '전시·행사 마케팅', enum: '전시_행사마케팅' },
  { kor: '기타마케팅', enum: '기타마케팅' },
]

/**
 * 디자인
 */
export const designConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: 'UIUX·프로덕트', enum: 'UIUX_프로덕트' },
  { kor: '웹디자인', enum: '웹디자인' },
  { kor: '디자인리서치', enum: '디자인리서치' },
  { kor: '그래픽·시각', enum: '그래픽_시각' },
  { kor: '일러스트레이터', enum: '일러스트레이터' },
  { kor: '브랜딩·BIBX', enum: '브랜딩_BIBX' },
  { kor: '공간·실내·VMD', enum: '공간_실내_VMD' },
  { kor: '산업(제품)', enum: '산업_제품' },
  { kor: '패키지', enum: '패키지' },
  { kor: '광고·콘텐츠', enum: '광고_콘텐츠' },
  { kor: '영상·모션', enum: '영상_모션' },
  { kor: '3D·VFX', enum: 'VFX_3D' },
  { kor: '출판·편집', enum: '출판_편집' },
  { kor: '건축·공공·조경디자인', enum: '건축_공공_조경디자인' },
  { kor: '패션·텍스타일', enum: '패션_텍스타일' },
  { kor: '기타디자인', enum: '기타디자인' },
]

/**
 * 게임
 */
export const gameConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '게임기획·PM', enum: '게임기획_PM' },
  { kor: '게임운영', enum: '게임운영' },
  { kor: '게임QA', enum: '게임QA' },
  { kor: '게임개발(클라이언트)', enum: '게임개발_클라이언트' },
  { kor: '게임개발(서버)', enum: '게임개발_서버' },
  { kor: '게임개발(모바일)', enum: '게임개발_모바일' },
  { kor: '테크니컬아티스트', enum: '테크니컬아티스트' },
  { kor: '게임아트', enum: '게임아트' },
  { kor: '게임3D모델링', enum: '게임3D모델링' },
  { kor: '게임애니메이션', enum: '게임애니메이션' },
  { kor: '게임이펙트·FX', enum: '게임이펙트_FX' },
  { kor: '게임인터페이스', enum: '게임인터페이스' },
  { kor: '게임연출·영상', enum: '게임연출_영상' },
  { kor: '게임사운드', enum: '게임사운드' },
  { kor: '기타게임', enum: '기타게임' },
]

/**
 * 미디어·엔터
 */
export const mediaAndEntertainmentConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: 'PD·감독', enum: 'PD_감독' },
  { kor: '콘텐츠기획·에디터', enum: '콘텐츠기획_에디터' },
  { kor: '방송작가', enum: '방송작가' },
  { kor: '촬영감독·카메라', enum: '촬영감독_카메라' },
  { kor: '영상편집', enum: '영상편집' },
  { kor: 'CG·모션그래픽', enum: 'CG_모션그래픽' },
  { kor: '사운드디자이너', enum: '사운드디자이너' },
  { kor: '기자·리포터', enum: '기자_리포터' },
  { kor: '아나운서·쇼호스트', enum: '아나운서_쇼호스트' },
  { kor: '성우·나래이터', enum: '성우_나래이터' },
  { kor: '크리에이터·인플루언서', enum: '크리에이터_인플루언서' },
  { kor: '모델·연기자', enum: '모델_연기자' },
  { kor: '사진작가', enum: '사진작가' },
  { kor: '방송기술·중계', enum: '방송기술_중계' },
  { kor: '송출·편성', enum: '송출_편성' },
  { kor: '아티스트매니지먼트', enum: '아티스트매니지먼트' },
  { kor: '배급·제작사', enum: '배급_제작사' },
  { kor: '음원·음반', enum: '음원_음반' },
  { kor: '웹툰·웹소설', enum: '웹툰_웹소설' },
  { kor: '출판', enum: '출판' },
  { kor: '통·번역', enum: '통_번역' },
  { kor: '기타 미디어·엔터', enum: '기타미디어_엔터' },
]

/**
 * 고객상담·TM
 */
export const customerServiceConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '직행수집', enum: '직행수집' },
  { kor: '원티드', enum: '원티드' },
  { kor: '그룹바이', enum: '그룹바이' },
  { kor: '랠릿', enum: '랠릿' },
  { kor: '로켓펀치', enum: '로켓펀치' },
  { kor: '고용24', enum: '고용24' },
  { kor: '아이원잡', enum: '아이원잡' },
  { kor: '중소벤처기업진흥공단', enum: '중소벤처기업진흥공단' },
  { kor: 'IBRIC', enum: 'IBRIC' },
  { kor: '클린아이', enum: '클린아이' },
  { kor: '아트모아', enum: '아트모아' },
  { kor: '복지넷', enum: '복지넷' },
  { kor: '한국상담학회', enum: '한국상담학회' },
  { kor: '잡스포이즈', enum: '잡스포이즈' },
  { kor: '금융투자협회', enum: '금융투자협회' },
  { kor: '한국금융벤처캐피탈협회', enum: '한국금융벤처캐피탈협회' },
  { kor: '한국공인회계사회', enum: '한국공인회계사회' },
  { kor: '여신금융협회', enum: '여신금융협회' },
  { kor: '한국관세사회', enum: '한국관세사회' },
  { kor: '한국보험계리사회', enum: '한국보험계리사회' },
  { kor: '인재채움뱅크', enum: '인재채움뱅크' },
  { kor: '잡알리오', enum: '잡알리오' },
  { kor: '나라일터', enum: '나라일터' },
  { kor: '농촌일자리플러스', enum: '농촌일자리플러스' },
  { kor: '도농인력중개플랫폼', enum: '도농인력중개플랫폼' },
  { kor: '국민참여일자리', enum: '국민참여일자리' },
  { kor: '외교부인사센터', enum: '외교부인사센터' },
  { kor: '대한상공회의소', enum: '대한상공회의소' },
  { kor: '병역일터', enum: '병역일터' },
]

/**
 * 서비스
 */
export const serviceConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '설치·수리기사', enum: '설치_수리기사' },
  { kor: '주차·주유', enum: '주차_주유' },
  { kor: '가사도우미', enum: '가사도우미' },
  { kor: '애견미용·훈련', enum: '애견미용_훈련' },
  { kor: '경호·경비', enum: '경호_경비' },
  { kor: '호텔서비스', enum: '호텔서비스' },
  { kor: '관광서비스', enum: '관광서비스' },
  { kor: '항공서비스', enum: '항공서비스' },
  { kor: '매장운영·관리', enum: '매장운영_관리' },
  { kor: '안내·리셉션', enum: '안내_리셉션' },
  { kor: '헤어디자이너', enum: '헤어디자이너' },
  { kor: '메이크업·네일', enum: '메이크업_네일' },
  { kor: '피부관리', enum: '피부관리' },
  { kor: '마사지·체형관리', enum: '마사지_체형관리' },
  { kor: '웨딩플래너', enum: '웨딩플래너' },
  { kor: '환경미화원', enum: '환경미화원' },
  { kor: '기타서비스', enum: '기타서비스' },
]

/**
 * 기획·전략
 */
export const planningAndStrategyConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: 'PM·PO', enum: 'PM_PO' },
  { kor: '서비스·상품기획', enum: '서비스_상품기획' },
  { kor: '사업·전략기획', enum: '사업_전략기획' },
  { kor: '컨설팅', enum: '컨설팅' },
  { kor: '기술기획', enum: '기술기획' },
  { kor: '사업개발·분석', enum: '사업개발_분석' },
  { kor: '프로젝트 매니저', enum: '프로젝트_매니저' },
  { kor: '운영관리(OM)', enum: '운영관리_OM' },
  { kor: '경영지원', enum: '경영지원' },
  { kor: '기타기획·전략·경영', enum: '기타기획_전략_경영' },
]

/**
 * 상품기획·MD
 */
export const productPlanningAndMDConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '상품기획', enum: '상품기획' },
  { kor: '온라인MD', enum: '온라인MD' },
  { kor: '식품MD', enum: '식품MD' },
  { kor: '패션MD', enum: '패션MD' },
  { kor: '뷰티MD', enum: '뷰티MD' },
  { kor: '영업MD', enum: '영업MD' },
  { kor: '리테일MD', enum: '리테일MD' },
  { kor: '기타상품기획·MD', enum: '기타상품기획_MD' },
]

/**
 * 영업
 */
export const salesConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: 'B2C영업', enum: 'B2C영업' },
  { kor: 'B2B영업', enum: 'B2B영업' },
  { kor: '영업관리·지원', enum: '영업관리_지원' },
  { kor: '일반영업', enum: '일반영업' },
  { kor: '기술·IT영업', enum: '기술_IT영업' },
  { kor: '금융·보험영업', enum: '금융_보험영업' },
  { kor: '해외영업', enum: '해외영업' },
  { kor: '제약·의료영업', enum: '제약_의료영업' },
  { kor: '기타 영업', enum: '기타영업' },
]

/**
 * 무역·물류
 */
export const tradeAndLogisticsConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '해외·상사영업', enum: '해외_상사영업' },
  { kor: '수출입관리·사무', enum: '수출입관리_사무' },
  { kor: '관세사', enum: '관세사' },
  { kor: '무역금융', enum: '무역금융' },
  { kor: '포워딩', enum: '포워딩' },
  { kor: '구매·조달', enum: '구매_조달' },
  { kor: '물류·SCM', enum: '물류_SCM' },
  { kor: '입출고·포장', enum: '입출고_포장' },
  { kor: '자재·재고관리', enum: '자재_재고관리' },
  { kor: '운송', enum: '운송' },
  { kor: '유통관리', enum: '유통관리' },
  { kor: '설비·시설관리', enum: '설비_시설관리' },
  { kor: '기타무역·물류·유통', enum: '기타무역_물류_유통' },
]

/**
 * 운송·배송
 */
export const transportationConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '배송·배달', enum: '배송_배달' },
  { kor: '승객운송', enum: '승객운송' },
  { kor: '물류운송', enum: '물류운송' },
  { kor: '전문운전', enum: '전문운전' },
  { kor: '배차관리', enum: '배차관리' },
  { kor: '기타운전·운송', enum: '기타운전_운송' },
]

/**
 * 회계·재무·세무
 */
export const accountingConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '직행수집', enum: '직행수집' },
  { kor: '원티드', enum: '원티드' },
  { kor: '그룹바이', enum: '그룹바이' },
  { kor: '랠릿', enum: '랠릿' },
  { kor: '로켓펀치', enum: '로켓펀치' },
  { kor: '고용24', enum: '고용24' },
  { kor: '아이원잡', enum: '아이원잡' },
  { kor: '중소벤처기업진흥공단', enum: '중소벤처기업진흥공단' },
  { kor: 'IBRIC', enum: 'IBRIC' },
  { kor: '클린아이', enum: '클린아이' },
  { kor: '아트모아', enum: '아트모아' },
  { kor: '복지넷', enum: '복지넷' },
  { kor: '한국상담학회', enum: '한국상담학회' },
  { kor: '잡스포이즈', enum: '잡스포이즈' },
  { kor: '금융투자협회', enum: '금융투자협회' },
  { kor: '한국금융벤처캐피탈협회', enum: '한국금융벤처캐피탈협회' },
  { kor: '한국공인회계사회', enum: '한국공인회계사회' },
  { kor: '여신금융협회', enum: '여신금융협회' },
  { kor: '한국관세사회', enum: '한국관세사회' },
  { kor: '한국보험계리사회', enum: '한국보험계리사회' },
  { kor: '인재채움뱅크', enum: '인재채움뱅크' },
  { kor: '잡알리오', enum: '잡알리오' },
  { kor: '나라일터', enum: '나라일터' },
  { kor: '농촌일자리플러스', enum: '농촌일자리플러스' },
  { kor: '도농인력중개플랫폼', enum: '도농인력중개플랫폼' },
  { kor: '국민참여일자리', enum: '국민참여일자리' },
  { kor: '외교부인사센터', enum: '외교부인사센터' },
  { kor: '대한상공회의소', enum: '대한상공회의소' },
  { kor: '병역일터', enum: '병역일터' },
]

/**
 * HR·총무
 */
export const hrConstants: {kor: string; enum: JobPositionEnumType}[] = [
  { kor: '전체', enum: '전체' },
  { kor: '인사기획', enum: '인사기획' },
  { kor: '평가·보상', enum: '평가_보상' },
  { kor: 'HRD·조직문화', enum: 'HRD_조직문화' },
  { kor: '리크루터·헤드헌터', enum: '리크루터_헤드헌터' },
  { kor: '노무관리', enum: '노무관리' },
  { kor: '총무·비서', enum: '총무_비서' },
  { kor: '기타 HR·총무', enum: '기타HR_총무' },
]


export const commuteConstants: {kor: string; enum: TransportEnumType}[] = [
  { kor: '자가용', enum: 'CAR' },
  { kor: '대중교통', enum: 'TRANSIT' },
]

export const commutingTimeConstants: {kor: string; enum: number}[] = [
  { kor: '30분 이내', enum: 30 },
  { kor: '1시간 이내', enum: 60 },
  { kor: '1시간 30분 이내', enum: 90 },
  { kor: '2시간 이상도 괜찮음', enum: 120 },
]
