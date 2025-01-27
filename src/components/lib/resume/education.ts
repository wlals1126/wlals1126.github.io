export type Education = {
    school: string;
    major: string;
    beginAt: `${number}.${number}`;
    endAt: `${number}.${number}`;
    courses: string[];
  };
  
  export const EDUCATION: Education[] = [
    {
      school: '대구소프트웨어마이스터고등학교',
      major: '임베디드소프트웨어개발과',
      beginAt: '2022.03',
      endAt: '2025.02',
      courses: [
        'C언어, Java, 컴퓨터구조, 자료구조 등 개발 기초 지식을 습득',
        '교내 교육 봉사 동아리 DUCAMI에서 다양한 코딩 교육 진행',
        '고교학점제 도입에 따라 Spring Boot와 Node.js를 활용한 서버 강의를 수강'
      ]
    }
  ];
  