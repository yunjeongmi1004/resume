import React from "react";



const today = new Date();
const formattedDate = `${today.getFullYear()}.${today.getMonth() + 1} 재직중`;


const PersonalHistoryTable = [
  {
    title:'KB부동산',
    content:'웹퍼블리셔(프리랜서)',
    datestart:'2021.11',
    dated:formattedDate,
  },
  {
    title:'NE능률',
    content:'웹퍼블리셔',
    datestart:'2020.09',
    dated:'2021.08',
  },
  {
    title:'하나투어',
    content:'웹퍼블리셔',
    datestart:'2018.08',
    dated:'2020.06',
  },
  {
    title:'러쉬코리아',
    content:'웹퍼블리셔',
    datestart:'2017.06',
    dated:'2018.06',
  },
  {
    title:'천재교육',
    content:'웹퍼블리셔',
    datestart:'2014.11',
    dated:'2017.05',
  },
]

function PersonalHistory() {
  return (
      <section className="personal-history">
          <h2 className="title">경력 요약 (9년 4개월)</h2>
          <div className="personal-history__table">
            {PersonalHistoryTable.map((item, key) =>(
                <dl key={key}>
                  <dt>{item.title}</dt>
                  <dd>{item.content}</dd>
                  <dd>{item.datestart} ~ {item.dated}</dd>
                </dl>
            ))}
          </div>
      </section>

  );
}

export default PersonalHistory;