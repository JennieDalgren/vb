import React from 'react'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <div
      className="wrapper"
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: '##f4f4f4',
      }}
    >
      {/* <div style={{ margin: '20px 0' }}>
        <img src="/assets/city.png" />
      </div> */}
      <div
        className="section"
        style={{
          textAlign: 'left',
          width: 700,
          maxWidth: '100%',
          minHeight: '260px',
        }}
      >
        <h1 style={{ color: '#fff' }}>Who is Victoria Bätz?</h1>
        <p>
          <em>Why are you so fascinated by Spain?</em> <br />I often get this
          question and I think I give different answers each time. At the bottom
          of it I think it’s my love for the way Spaniards view life. I envy
          their spontaneity, their love for the good life, how they see the
          beauty in the little things, how they can make any meal feel lika a
          feast and that (almost) no-one is a stranger. I love that the meals
          are the most important events of the day and that they have invented
          the word sobremesa, which translates more or less into “staying at the
          table enjoying each others company, conversation and probably some
          more wine after lunch or dinner”. I know no other language that have a
          word for this. I love the diversity of the nature, the mountains, the
          beaches, the islands and the light! The light in southern Spain is
          like nowhere else! I love the abundance of top quality produce, the
          markets and all the small corner shops where you can buy everything
          from cheese to canned seafood and the best wines and cavas.
        </p>
        <br />
        <p>
          {' '}
          Don’t get me wrong, I love my Sweden, but the downside to everything
          working like a clockwork is that things are pretty strict and there is
          not a lot of room for spontaneity or acting “out of the box”. In
          Sweden it’s not common with three hour lunches, rowdy tapas rounds or
          deciding to go out for dinner on the same day (plans like that have to
          be decided upon weeks in advance). There is a saying that Swedes live
          to work, while the Spanish work to live. And I think there is a lot of
          truth to that.{' '}
        </p>
        <br />
        <p>
          I now live in the cosmopolitan city of Barcelona since 3,5 years and I
          have also lived in the capital Madrid and spent many, many summers and
          holidays in my family’s vacation home in Andalusia in the south of
          Spain. Maybe the answer to the question about my fascination is that I
          was just destined to end up here in this country, after all this is
          where my parents met (at the Hotel Victoria in Palma de Mallorca…).
        </p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
