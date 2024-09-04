import Layout from '../../components/Layout';
import Image from 'next/image';
import styled from 'styled-components';

function Profiles() {
  return (
      <Layout title='Profiles'>
          <h2>Public Profiles</h2>

          <Description>
              <div>
                  GOMdrop has over 50,000 users, both managers (the users creating forms
                  and managing orders) and joiners (the users joining orders). However, managers had no way of
                  sharing their GOMdrop forms to their audience in an easy to search format.
              </div>

              <div>
                  In order to address this, I designed and implemented a public profile feature that we released to
                  our subscribers as a beta feature.
              </div>

              <div>
                  The basics of any profile had to be included: display name, status, a bio section, profile picture, links; but I also
                  decided to include a flexible pronoun selector as well as customizable tab navigation so users can
                  add new pages to their profile.
              </div>

              <div>
                  Most of all, I wanted profiles to feel fun and to feel customizable without being intimidating.
              </div>

              <div>
                 <a href='https://gomdrop.com/user/kenia#directory' target='_blank'>
                     View this public profile on GOMdrop.
                 </a>
              </div>
          </Description>

          <Image
              src='/publicProfile.png'
              alt='public profile screenshot'
              width='600'
              height='600'
              sizes="100vw"
              // Make the image display full width
              style={{
                  borderRadius: '16px',
                  width: '100%',
                  height: 'auto',
              }}
          />

          <Description>
              <div>
                  To make the pronoun selector, I looked at existing pronoun features used on social media websites,
                  multiple choice dropdowns used in non-social media contexts, and studied how users tended to style their
                  pronouns on websites with no dedicated pronoun section.
              </div>

              <div>
                  The goal was to create a pronoun selector that included as many known pronouns as possible without
                  preventing the user from creating their own unique pronouns.
              </div>

              <div>
                  As with all GOMdrop components, accessibility was a big concern. I decided to go with
                  downshift to build the multiple select dropdown without compromising accessibility.
              </div>
          </Description>

          <Image
              src='/pronouns.png'
              alt='public profile screenshot'
              width='600'
              height='600'
              sizes="100vw"
              // Make the image display full width
              style={{
                  borderRadius: '16px',
                  width: '100%',
                  height: 'auto',
              }}
          />

          <Description>
              <div>
                 The main audience for our managers are the users and non-users who join their orders as well as prospective
                  joiners. Therefore, public profiles for our managers had to include a way to see real time updates to their orders.
              </div>

              <div>
                  Using Typesense, orders are fetched depending on different filter and grouping configurations. This allows for
                  robust filtering.
              </div>
          </Description>

          <Image
              src='/directory.png'
              alt='public profile screenshot'
              width='600'
              height='600'
              sizes="100vw"
              // Make the image display full width
              style={{
                  borderRadius: '16px',
                  width: '100%',
                  height: 'auto',
              }}
          />

          <Description>
              <div>
                  Profiles are currently being used by over 70 beta testers and will go live to over 50,000 users soon.
              </div>

              <div>
                  <a href="https://gomdrop.com/user/kenia#directory" target="_blank">
                      View this public profile on GOMdrop.
                  </a>
              </div>
          </Description>
      </Layout>
  )
}

const Description = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    margin-bottom: 1em;
    line-height: 21px;

    &:not(:first-of-type) {
        margin-top: 1em;
    }
`;

export default Profiles;