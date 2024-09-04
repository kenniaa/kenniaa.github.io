import Layout from '../../components/Layout';
import Image from 'next/image';
import styled from 'styled-components';

function Form() {
    return (
        <Layout title="Public Order Form">
            <h2>Public Order Form</h2>

            <Description>
                <div>
                    The public order form was one of the first things I worked on for GOMdrop.
                    It continues to be one of our main features- over 40,000 group orders have been created.
                </div>

                <div>
                    <a href="https://gomdrop.com/grouporders/public/63dd7a03eca0df0011a0c31f" target="_blank">
                        View this form on GOMdrop.
                    </a>
                </div>
            </Description>

            <Image
                src="/form1.png"
                alt="public profile screenshot"
                width="600"
                height="600"
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
                    While working on the editor for the order form, I focused on keeping
                    the UI straightforward and easy to understand. The intent was to provide
                    enough flexibility for users to create order forms that contained all the details
                    they needed without a high learning curve.
                </div>
            </Description>

            <Image
                src="/form2.png"
                alt="public profile screenshot"
                width="600"
                height="600"
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
                    The public order form is made using CSS grid to provide a smooth transition
                    between large and small screens. Managers are bale to add specific information using
                    markdown as well as add images and descriptions to items.
                </div>
            </Description>

            <Image
                src="/form4.png"
                alt="public profile screenshot"
                width="600"
                height="600"
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
                    The success message can be edited by managers to include order
                    specific information. If a customer has signed up to GOMdrop they are able to
                    view all their orders.
                </div>
            </Description>

            <Image
                src="/form5.png"
                alt="public profile screenshot"
                width="600"
                height="600"
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
                    On the manager side, users can see all responses to an order and accept or decline them. All
                    dropdowns are
                    created using React Menu to ensure accessibility.
                </div>

                <div>
                    <a href="https://gomdrop.com/grouporders/public/63dd7a03eca0df0011a0c31f" target="_blank">
                        View this form on GOMdrop.
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

export default Form;