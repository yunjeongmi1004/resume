import React from "react";

const education = [
  {
    title:'성공회대학교',
    content:'정보통신공학과 졸업',
    date:'2009 ~ 2013'
  },
  {
    title:'인일여자고등학교',
    content:'졸업',
    date:'2006 ~ 2008'
  },
]


function Education() {
  return (
      <section className="education">
        <h2 className="title">학력</h2>
        <div className="personal-history__table">
            {education.map((item, key) =>(
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

export default Education;
