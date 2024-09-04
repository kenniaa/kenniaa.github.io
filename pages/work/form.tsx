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

                    It has evolved through many iterations over the years. I take into account
                    our users' feedback for every update as well as our future goals for the page.
                </div>

                <div>
                    The GOMdrop community has recommended many of the current features including link shortening,
                    images in items, drag and drop reorganization for items, and custom submission message
                    among other features.
                </div>

                <div>
                    <a href="https://gomdrop.com/grouporders/public/63dd7a03eca0df0011a0c31f" target="_blank">
                        View this form on GOMdrop.
                    </a>
                </div>
            </Description>

            <Image
                src="/form1.png"
                alt="screenshot of gomdrop's form editor"
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
                alt="screenshot of gomdrop's public form"
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
                    between large and small screens. Managers are able to add specific information using
                    markdown as well as add images and descriptions to items.
                </div>
            </Description>

            <Image
                src="/form4.png"
                alt="screenshot of the success message on a gomdrop form"
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
                alt="screenshot of the response page of a gomdrop form"
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
            </Description>

            <Description>
                <div>
                    Although not currently live, I also integrated Stripe into the form to process payment from
                    customers. This feature was called Direct Pay. Processing payment directly removed one obstacle from our users' flow: they no longer
                    had to manually check third party payment websites to accept orders.
                </div>

                <div>
                    Unfortunately, I ran into some problems when Stripe updated their Orders API. Direct Pay is currently
                    disabled for all our users until I reintegrate the new Stripe API into GOMdrop.
                </div>

                <div>
                    Along with the payments from our shipment feature GOMdrop has processed over $140,000.
                </div>
            </Description>


            <Description>
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