import React from "react";

const ProjectHistoryTable = [
  {
    title:'KB국민은행',
    date:'2021.11 ~ 2024.10',
    projectname:'KB부동산',
    projectinfo:'반응형 웹사이트 리뉴얼 구축 및 운영',
    stack:'Vue, Vscode, Figma, Zeplin',
    detail:[
      {list:'KB부동산 퍼블리싱 UI 시스템 가이드 제작'},
      {list:'CSS Variable 사용한 Dark Mode 테마 작업 (css 파일 통일화 및 사이즈 축소)'},
      {list:'bootstrap-vue 로 제작되어있는 환경 개선(리뉴얼 작업, 기존 bootstrap.css 관련 스타일 연계X, 신규 UI로 제작)'},
      {list:'VUE.JS 페이지 라우팅, 페이지 전환, 팝업, 스크롤이벤트, 네비게이션 구현'},
      {list:'이벤트 페이지 템플릿 가이드 제작(룰렛이벤트 애니메이션 제작)'}
    ]
  },
  {
    title:'KB국민은행',
    date:'2022.07 ~ 2022.10',
    projectname:'스타뱅킹',
    projectinfo:'스타뱅킹 웹뷰 부동산 매물대출 컨텐츠 작업',
    stack:'Zeplin, Vscode, HTML, CSS',
    detail:[
      {list:'스타뱅킹 퍼블리싱 가이드에 맞춰 퍼블리싱 진행'},
      {list:'다크모드 CSS 작업'}
    ]
  },
  {
    title:'KB국민은행',
    date:'2021.12 ~ 2022.01',
    projectname:'데이터허브',
    projectinfo:'어드민 페이지 작업',
    stack:'Zeplin, Vscode, VUE',
    detail:[
      {list:'Bootstrap.vue 어드민 작업(b-table / Modal / Pagination / Form)'},
    ]
  },
  {
    title:'NE능률',
    date:'2020.09 ~ 2021.08',
    projectname:'아이챌린지',
    projectinfo:'웹/모바일 리뉴얼&운영',
    stack:'Abode XD, Html, Css, Javascript',
    detail:[
      {list:'웹/모바일 리뉴얼 및 운영'},
      {list:'이벤트 프로모션 페이지 구축'},
    ]
  },
  {
    title:'NE능률',
    date:'2021.03 ~ 2021.05',
    projectname:'키바조이',
    projectinfo:'모바일 페이지 구축',
    stack:'Abode XD, TweenMax, Javascript',
    detail:[
      {list:'신사업 키바조이 사이트 구축'},
    ]
  },
  {
    title:'하나투어',
    date:'2018.08 ~ 2020.06',
    projectname:'하나투어 웹사이트',
    projectinfo:'운영',
    stack:'Photoshop, Html, Css, jquery',
    detail:[
      {list:'하나투어 전사 웹사이트 운영'},
      {list:'여행박람회 프로모션 웹 구축'},
    ]
  },
  {
    title:'하나투어',
    date:'2019.08 ~ 2020.01',
    projectname:'하나메일',
    projectinfo:'사내메일 구축',
    stack:'Photoshop, Html, Css, jquery',
    detail:[
      {list:'하나투어 대응개발프로젝트로 전사 사용되는 사내메일 구축'},
      {list:'메일화면/캘린더/회의실예약/주소록 등 구축'},
    ]
  },
  {
    title:'러쉬코리아',
    date:'2017.06 ~ 2018.06',
    projectname:'러쉬코리아 온라인몰',
    projectinfo:'운영 및 리뉴얼',
    stack:'Photoshop, Html, Css, jquery',
    detail:[
      {list:'러쉬코리아 온라인몰 운영 및 리뉴얼'},
    ]
  },
  {
    title:'러쉬코리아',
    date:'2017.12 ~ 2018.01',
    projectname:'러쉬코리아 스마트TV SnsBoard 제작',
    projectinfo:'React 기반 구축',
    stack:'React, Css',
    detail:[
      {list:'리액트 기반 스마트 보드 서비스 구현'},
    ]
  },
  {
    title:'천재교육',
    date:'2014.11 ~ 2017.05',
    projectname:'밀크T',
    projectinfo:'밀크T(초등) 태블릿 앱 구축 및 운영',
    stack:'Html, Css',
    detail:[
      {list:'하이브리드 앱 전체 페이지 구축 및 운영'},
      {list:'브랜드웹, 학부모앱, 키바조이 앱 등 웹뷰화면 페이지 작업'},
    ]
  },
]


function ProjectHistory() {
  return (
      <section className="project-history">
        <h2 className="title">상세 경력</h2>
        <div className="project-history__table">
            {ProjectHistoryTable.map((item, key) =>(
                <div key={key} className="flexbox">
                  <div>
                    <p className="ptitle"><span>{item.title}</span> {item.date}</p>
                    <strong className="name">{item.projectname}</strong>
                    <p className="info">{item.projectinfo}</p>
                   
                    <p className="stack"><strong>작업환경</strong>{item.stack}</p>
                  </div>
                  <ul>
                    {item.detail.map((item, key2) =>(
                      <li key={key2}>{item.list}</li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
      </section>

  );
}

export default ProjectHistory;
