import Layout from '../components/Layout';
import styled from 'styled-components';

export default function Home() {
  return (
    <Layout title='Kenia'>
        <p>
            Frontend developer based in Brooklyn. </p>

        <p>
            I'm the founder of <a href='https://gomdrop.com' target='_blank'>GOMdrop</a>,
            a platform that helps people buy and sell hobby items.
        </p>

        <p>
            I'm really into accessible, responsive sites that feel natural and intuitive.
        </p>

        <div>
            Interesting work I've done:
            <WorkList>
                <li>
                    <a href="/work/profiles">Public Profiles</a>
                </li>
                <li>
                    <a href="/work/themes">Themes</a>
                </li>
                <li>
                    <a href="/work/ranking">Item Ranking</a>
                </li>
                <li>
                    <a href="/work/form">Public Order Form</a>
                </li>
                <li>
                    <a href="/work/social">Assorted social media marketing</a>
                </li>
            </WorkList>
        </div>
    </Layout>
  )
}

const WorkList = styled.ul`
    font: inherit;
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
`;