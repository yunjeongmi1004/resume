import React from "react";

const aboutTable = [
  {
    title:'전화번호',
    content:'010-6658-9906',
  },
  {
    title:'이메일',
    content:'jungma9011@gmail.com',
  },
  {
    title:'홈페이지',
    content:'https://yunjeongmi1004.github.io/homepage/',
  },
  {
    title:'GitHub',
    content:'https://github.com/yunjeongmi1004',
  }
]



function About() {
  return (
      <section className="about">
         
        <h1 className="about__title">
          <span>안녕하세요, 신뢰와 책임을 중요시 하는 윤정미입니다.</span>
        </h1>
        <div className="about__table">
            {aboutTable.map((item, key) =>(
            <dl key={key}>
              <dt>{item.title}</dt>
              <dd>
              {item.title === '홈페이지' || item.title === 'GitHub' ? <a href={item.content}>{item.content}</a> : item.content}
              </dd>
            </dl>
            ))}
        </div>
      </section>

  );
}

export default About;
