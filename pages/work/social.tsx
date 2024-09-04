import Layout from '../../components/Layout';
import Image from 'next/image';
import styled from 'styled-components';

function Social() {
    return (
        <Layout title='Social Media Marketing'>
            <h2>Social Media Marketing</h2>

            <Description>
                <div>
                    When I first started GOMDrop I knew I would have to "wear many hats". At the time
                    I thought it couldn't be too hard to learn to eye catching and informative social media
                    posts to promote our site. With much trial and error, I found that it was not as easy
                    as it seemed, but it was rewarding to design something different than a web page.
                </div>

                <div>
                    <a href='https://instagram.com/gom.drop' target='_blank'>
                        View these social media posts on Instagram.
                    </a>
                </div>
            </Description>

            <Image
                src='/subscriptions.png'
                alt='gomdrop subscription banner showing relevant information'
                width='600'
                height='600'
                sizes="100vw"
                // Make the image display full width
                style={{
                    borderRadius: '16px',
                    width: '100%',
                    height: 'auto',
                    marginBottom: '1em'
                }}
            />

            <SocialGrid>
                <Image
                    src='/password forms.png'
                    alt='gomdrop password protection instagram post'
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

                <Image
                    src='/profile images.png'
                    alt='gomdrop public profile instagram post'
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

                <Image
                    src='/email activity.png'
                    alt='gomdrop email activity instagram post'
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

                <Image
                    src='/captionsImages.png'
                    alt='gomdrop image and description instagram post'
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
            </SocialGrid>
        </Layout>
    )
}

const SocialGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
`;

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

export default Social;