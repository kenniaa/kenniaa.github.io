import Layout from '../components/Layout';
import styled from 'styled-components';

export default function Home() {
  return (
    <Layout title='Home'>
        <p>
            I'm a frontend engineer at <a href='https://edlio.com' target='_blank'>Edlio</a>, but occasionally I work
            on the backend. In my spare time I also run <a href='https://gomdrop.com/' target='_blank'>GOMdrop</a>,
            a platform that helps people buy and sell hobby items.
        </p>
        <p>
            Right now I'm really into React, styled-components, and Storybook.
        </p>

        <p>
            I care about accessibility and responsive design.
        </p>
    </Layout>
  )
}