import React from "react";

const PersonalHistoryTable = [
  {
    title:'KB부동산(국민은행)',
    content:'웹퍼블리셔(프리랜서)',
    date:'2021.11 ~ 재직중'
  },
  {
    title:'NE능률',
    content:'웹퍼블리셔',
    date:'2020.09 ~ 2021.08'
  },
  {
    title:'하나투어',
    content:'웹퍼블리셔',
    date:'2018.08 ~ 2020.06'
  },
  {
    title:'러쉬코리아',
    content:'웹퍼블리셔',
    date:'2017.06 ~ 2018.06'
  },
  {
    title:'천재교육',
    content:'웹퍼블리셔',
    date:'2014.11 ~ 2017.05'
  },
]

function PersonalHistory() {
  return (
      <section className="personal-history">
          <h2 className="title">경력 요약</h2>
          <div className="personal-history__table">
            {PersonalHistoryTable.map((item, key) =>(
                <dl key={key}>
                  <dt>{item.title}</dt>
                  <dd>{item.content}</dd>
                  <dd>{item.date}</dd>
                </dl>
            ))}
          </div>
      </section>

  );
}

export default PersonalHistory;
