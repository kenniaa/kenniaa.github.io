import Layout from '../components/Layout';
import styled from 'styled-components';

export default function Home() {
  return (
    <Layout title='Home'>
        <p>
            I'm a frontend developer based in Brooklyn working on <a href='https://gomdrop.com' target='_blank'>GOMdrop</a>,
            a platform that helps people buy and sell hobby items.
        </p>
        <br />
        <p>
           Things I'm into: React Hooks, styled-components, Storybook, downshift
        </p>

        <p>
           Things I care about: accessibility, responsive design, soft colors
        </p>

        <p>
            Things I'm doing: reading Dune, working on GOMdrop's direct pay feature
        </p>
    </Layout>
  )
}