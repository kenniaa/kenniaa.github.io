import Layout from '../../components/Layout';
import Image from 'next/image';
import styled from 'styled-components';

function Themes() {
    return (
        <Layout title='Themes'>
            <h2>Themes</h2>

            <Description>
                <div>
                    Personally, I always choose to use a dark theme over a light one
                    if possible. This was a quick feature that also allowed us to lay
                    down some scaffolding for a future custom themes feature.
                </div>

                <div>
                    Custom theme icons were created using Adobe Illustrator and Figma.
                </div>
            </Description>

            <Image
                src='/darkTheme.png'
                alt='gomdrop settings with the dark theme selected'
                width='600'
                height='600'
                sizes="100vw"
                // Make the image display full width
                style={{
                    borderRadius: '16px',
                    width: '100%',
                    height: 'auto',
                    marginBottom: '1em',
                }}
            />

            <Image
                src='/lightTheme.png'
                alt='gomdrop settings with the light theme seleted'
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
                    It was important to create design tokens that can be shared across platforms and that
                    can be easily interpreted by developers. My first instinct was to just toss some hex codes around
                    and call it a day, but in order to create a theme feature that could scale into something
                    more creative, it was necessary to sit down and actually think about what each color was actually
                    accomplishing in the theme.
                </div>

                <div>
                    Though the design tokens I created were enough for our current 2 themes, I am far from
                    satisfied with the system as a whole. More work and research is necessary to ensure that
                    GOMdrop's design system is cohesive.
                </div>
            </Description>

            <Image
                src='/styleDictionary.png'
                alt='style directory design tokens'
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
                    After creating the design tokens I used Styled Component's theme provider
                    to pass in the user selected theme. An additional context is used to fetch and set themes.
                </div>

                <div>
                    After the theme is selected, it is stored in the user's cookies. This allows us to access the
                    theme upon them accessing the site. Themes are also stored in the user's document in our Mongo database.
                </div>

                <div>
                    Currently over 10,000 users have enabled the dark theme.
                </div>
            </Description>

            <Image
                src='/theme.png'
                alt='organization of a gomdrop theme'
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
        </Layout>
    )
}

const Description = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    margin-bottom: 1em;
    line-height: 21px;

    &:not(:first-child) {
        margin-top: 1em;
    }
`;

export default Themes;