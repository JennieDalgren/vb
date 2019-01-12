import React from 'react'

import Layout from '../components/layout'

const WorkPage = () => (
  <Layout>
    <div
      className="wrapper"
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        opacity: '0.5',
        backgroundImage: `url('https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div
        className="section work-section"
        style={{
          textAlign: 'left',
          width: 760,
          maxWidth: '100%',
          minHeight: '260px',
        }}
      >
        <h1>Work with me.</h1>
        <p>
          I have always had a passion for food. I come from a family that you
          could call foodies long before the word was invented. Growing up I
          thought that everyone ate the way we did, as I grew up I learned that
          they didn’t. My mom bought glossy magazines with recipes and she would
          try them on the family every weekend. My father used to cook all the
          food for Christmas (I think the record was 48 dishes on the Christmas
          table) and my friends still call him Pappa Grill (Daddy Barbecue).
        </p>
        <p>
          My working career has been closely tied to food, marketing and
          communication. I have worked as a Nordic Brand Manager for a health
          food company, I have been a Key Account Manager in charge of the Food
          and Restaurant clients at a Digital communications agency and these
          days I work mainly as a Food Tour Guide, a job that ties all my former
          experiences and interests together. The vibrant streets, bars and
          restaurants of Barcelona are my offices and happy and relaxed
          vacationers are my clients. I also help brands and companies with
          their presence in social media and I love to create texts about Spain,
          food and health.
        </p>
        <p>
          If you want to read more about my work experience, please have a look
          at my{' '}
          <a href="https://www.linkedin.com/in/victoriabatz/" target="_blank">
            LinkedIn profile.
          </a>
        </p>
        <p>
          My offer as a is wide, but here is a breakdown to make it more
          understandable:
        </p>
        <ul className="workList">
          <li>
            <span>- Marketing and Social Media Management. </span>
            <br />I can offer your company an overview and an adapted strategy
            for your brand. I also provide services like community manager,
            content creation (text and photos) and curation, posting, etc.
          </li>
          <li>
            <span>- Text production. </span>
            <br />
            Articles, interviews or blogposts on Travel, Spain, Food, Health and
            Wellbeing as well as Restaurant reviews. My hunger for creating
            texts related to my passions has no limit.
          </li>
          <li>
            <span>- Food and cultural tours around Barcelona and Spain.</span>
            <br />
            Learn about the culture, the mind-blowing history and most of all
            the beauty of the Spanish cuisine. Spain is the home of chefs like
            Ferran Adria but also the home of simple but delicious dishes like
            tomato bread and deep-fried anchovies.
          </li>
          <li>
            <span>- Plan your visit to Barcelona</span>
          </li>
          <li>
            <span>- Breaking the market barriers.</span>
            <br />I have unique insight to the markets in Sweden and Spain and
            can offer cultural insights on both markets. If you are a Swedish
            company looking to enter Spain or a Spanish company dying to enter
            the Swedish market, donate hesitate to contact me.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default WorkPage
