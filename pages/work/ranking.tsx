import Layout from '../../components/Layout';
import Image from 'next/image';
import styled from 'styled-components';

function Ranking() {
    return (
        <Layout title='Item Ranking'>
            <h2>Item Ranking</h2>

            <Description>
                <div>
                    The item ranking feature allows users to rank a list of options available within an item.
                    A large part of our users worked in the kpop/anime space which often includes random items alongside
                    things like albums or photobooks. These users needed a way to collect their customer's rankings
                    while making it clear that the rankings were tied to a single item of merchandise.
                </div>

                <div>
                    To research and design this feature from a product perspective I decided to work closely
                    with the GOMdrop community. I gathered information from our users about their process of ranking options
                    as well as how they formatted this question before they used GOMdrop and after they started using GOMdrop.
                    I then created a simple proof of concept and brought it to them for feedback. After more back and forth,
                    I settled on the final design which is currently being used on 7000 forms.
                </div>

                <div>
                    I used the React library <a href='https://github.com/clauderic/dnd-kit' target='_blank'>dnd kit</a> to add
                    drag and drop support to the sortable options. This library also handles keyboard support for greater accessibility.
                </div>

                <div>
                    I also decided to use a slide in panel to hold the sortable options so that the flow of purchasing
                    items is not disrupted.
                </div>

                <div>
                    <a href='https://gomdrop.com/grouporders/public/63dd7a03eca0df0011a0c31f' target='_blank'>
                        View this on a test GOMdrop form.
                    </a>
                </div>
            </Description>

            <Image
                src='/ranking1.png'
                alt='an open item ranking panel on a gomdrop public form showing all rankable options'
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
    
    &:not(:first-of-type) {
        margin-top: 1em;
    }
`;

export default Ranking;