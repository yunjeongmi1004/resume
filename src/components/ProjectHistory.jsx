import React from "react";

const ProjectHistoryTable = [
  {
    title:'국민은행',
    date:'2021.11 ~ 2024.10',
    projectname:'KB부동산',
    projectinfo:'반응형 웹사이트 리뉴얼 구축 및 운영',
    stack:'Vue2, Figma, Zeplin',
    detail:[
      {list:'1내용'},
      {list:'2내용'}
    ]
  },
  {
    title:'국민은행',
    date:'2021.11 ~ 2024.10',
    projectname:'스타뱅킹',
    projectinfo:'스타뱅킹 웹뷰 페이지 구축 가이드에 맞춰 퍼블리싱 진행',
    stack:'Zeplin',
    detail:[
      {list:'1내용'},
      {list:'2내용'}
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
