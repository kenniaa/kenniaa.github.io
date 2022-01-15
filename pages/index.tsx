import Layout from '../components/Layout';
import styled from 'styled-components';

export default function Home() {
  return (
    <Layout title='Kenia'>
        <p>
            I'm a frontend developer based in Brooklyn working on <a href='https://gomdrop.com' target='_blank'>GOMdrop</a>,
            a platform that helps people buy and sell hobby items.
        </p>

        <p>
           Things I'm into: React Hooks, styled-components, Storybook, downshift
        </p>

        <p>
           Things I care about: accessibility, responsive design, soft colors
        </p>

        <p>
            Things I'm working on: direct pay feature for GOMdrop
        </p>

        <p>
            Things I'm doing: reading Children of Dune
        </p>
    </Layout>
  )
}