import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, CardColumns
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const LiftingCard = (props) => {
    return (
        <div>
            <h1>Lifting Bottoms</h1>
            <CardColumns>
                <Card>
                    <CardImg top width="100%" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_90,fl_lossy/1ba11a2b91af430ab952a76d013eb0a8_9366/Reebok_Combat_Legging_Black_BR9203_21_model.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Reebok Combat Legging</CardTitle>
                        <CardSubtitle>Reebok</CardSubtitle>
                        <CardText>Support and comfort meet in these compression leggings. </CardText>
                        <Button active href = "https://www.reebok.com/us/reebok-combat-legging/BR9203.html"> $60.00 </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_90,fl_lossy/2e65ca9ee70845f7806fa8c8010a9bdf_9366/CrossFit_Lux_Legging_-_Digital_Black_D94952_21_model.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Crossfit Lux Legging -Digital</CardTitle>
                        <CardSubtitle>Reebok</CardSubtitle>
                        <CardText>High power interlock fabrication gives you total coverage and confidence during squats, and the fitted fit is designed to move with you through any exercise.</CardText>
                        <Button active href = "https://www.reebok.com/us/crossfit-lux-legging---digital/D94952.html">$70.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/elufv22fzdwzxgtx0vw8/power-studio-womens-high-rise-training-tights-GPcF65.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Nike Power Studio</CardTitle>
                        <CardSubtitle>Nike</CardSubtitle>
                        <CardText>These feature sweat-wicking, compressive fabric to help keep you dry, comfortable and supported while you work out. </CardText>
                        <Button active href = "https://www.nike.com/t/power-studio-womens-high-rise-training-tights-GPcF65">65.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/nfxafvwtwkhcewflvwdn/pro-hyperwarm-womens-tights-3MB9hQ.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Nike Pro HyperWarm</CardTitle>
                        <CardSubtitle>Nike</CardSubtitle>
                        <CardText>Combine sweat-wicking thermal fabric with ventilation in high-heat areas</CardText>
                        <Button active href = "https://www.nike.com/t/pro-hyperwarm-womens-tights-3MB9hQ/933305-010">75.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://athleta.gap.com/webcontent/0013/763/584/cn13763584.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>High Rise Chaturanga Tight</CardTitle>
                        <CardSubtitle>Athleta</CardSubtitle>
                        <CardText>Inspired for studio workouts and adventures, these should be your go-to leggings.</CardText>
                        <Button active href "https://athleta.gap.com/browse/product.do?pid=243146032&cid=1085510&pcid=1059481">59.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://images.lululemon.com/is/image/lululemon/LW5BJOS_027985_1?$image_carousel-lg_2x$" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Train Times 7/8 Pant 25"</CardTitle>
                        <CardSubtitle>lululemon</CardSubtitle>
                        <CardText>Recommended for Crossfit by top fitness trainers. A very versatile legging for any activity!</CardText>
                        <Button active href = "https://shop.lululemon.com/p/women-pants/Train-Times-7-8-Pant/_/prod8555523?clickref=1011l5QwTpcQ&CID=PHG_aff">98.00</Button>
                    </CardBody>
                </Card>
            </CardColumns>
            <h3>Lifting Tops</h3>
            <CardColumns>
                <Card>
                    <CardImg top width="100%" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_90,fl_lossy/9c190fe5a7be4cae9f3ca8e2016d4596_9366/Reebok_CrossFit_Jacquard_Tank_Black_D94912_21_model.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Reebok Crossfit Jacquard Tank</CardTitle>
                        <CardSubtitle>Reebok</CardSubtitle>
                        <CardText>Designed with style and function in mind, this muscle tank gives you full range of motion.</CardText>
                        <Button active href = "https://www.reebok.com/us/reebok-crossfit-jacquard-tank/D94912.html">40.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_90,fl_lossy/1dfb6a9c21884a4d9e89a85d01776501_9366/Perforated_Speedwick_Tank_Black_CG1071_21_model.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Perforated Speedwick Tank</CardTitle>
                        <CardSubtitle>Reebok</CardSubtitle>
                        <CardText>This perforated racer back tank provides ultimate breathability. </CardText>
                        <Button active href = "https://www.reebok.com/us/perforated-speedwick-tank/CG1071.html">$29.99</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/tfh55ukzr1x1et8uhq2x/dri-fit-elastika-womens-training-tank-top-jnTplPvy.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Nike DRIFIT Elastika</CardTitle>
                        <CardSubtitle>Nike</CardSubtitle>
                        <CardText> This tank top features mesh panels and sweat-wicking fabric to help keep you cool, dry and comfortable during your workout. </CardText>
                        <Button active href = "https://www.nike.com/t/dri-fit-elastika-womens-training-tank-top-jnTplPvy">35.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/p8aopgfs3xnffhdhm9ph/dri-fit-victory-womens-short-sleeve-training-top-LLp1lR.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Nike DRIFIT Victory</CardTitle>
                        <CardSubtitle>Nike</CardSubtitle>
                        <CardText>This top is sweatwicking and perfect for any workout. </CardText>
                        <Button active href = "https://www.nike.com/t/dri-fit-victory-womens-short-sleeve-training-top-LLp1lR/889557-010">30.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://underarmour.scene7.com/is/image/Underarmour/V5-1326087-001_FC_Main?scl=1&fmt=jpg&qlt=80&wid=612&hei=650&size=612,650&cache=on,off&bgc=f0f0f0&resMode=sharp2" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>UA Graphic Sportstyle Muscle</CardTitle>
                        <CardSubtitle>Under Armour</CardSubtitle>
                        <CardText>A tank top with a loose, relaxed fit and four way stretch.</CardText>
                        <Button active href = "https://www.underarmour.com/en-us/womens-ua-graphic-sportstyle-muscle-tank/pid1326087-001">30.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://underarmour.scene7.com/is/image/Underarmour/V5-1324133-436_FC_Main?scl=1&fmt=jpg&qlt=80&wid=612&hei=650&size=612,650&cache=on,off&bgc=f0f0f0&resMode=sharp2" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>UA Vanish</CardTitle>
                        <CardSubtitle>Under Armour</CardSubtitle>
                        <CardText>This fitted tank provides support and stretch to give you maximum range of motion during your workout.</CardText>
                        <Button active href "https://www.underarmour.com/en-us/balance-tank/pid1324133-436">50.00</Button>
                    </CardBody>
                </Card>
            </CardColumns>
        </div>
    );
};

export default LiftingCard;