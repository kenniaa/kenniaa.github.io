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
                  our subscribers.
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
              alt='screenshot of a gomdrop public profile'
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
                  preventing the user from creating their own unique pronouns. I felt strongly about giving users the means
                  to most accurately describe their preferred pronouns.
              </div>

              <div>
                  As with all GOMdrop components, accessibility was a big concern. I decided to go with
                  downshift to build the multiple select dropdown without compromising accessibility.
              </div>
          </Description>

          <Image
              src='/pronouns.png'
              alt='screenshot showing the pronoun options in the gomdrop pronoun selector'
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
              alt='the gomdrop public form directory showing an open filter menu'
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
                After we released profiles, we received feedback from users who found that the single
                description box was too limited for how they wanted to present information.
              </div>

              <div>
                  To address these concerns, I created a customizable tab navigation component which
                  would allow users to create custom tabs for any extra information they may have.
              </div>

              <div>
                  The component is keyboard accessible and general enough to be used on other GOMdrop
                  pages. I plan to add drag and drop to it so that users can rearrange the tabs.
              </div>
          </Description>

          <Image
              src='/customTabs.png'
              alt='gomdrop public profile showing an open tab navigation setting menu'
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