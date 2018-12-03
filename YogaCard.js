import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, CardColumns
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const YogaCard = (props) => {
    return (
        <div>
            <h1>Yoga Bottoms</h1>
            <CardColumns>
                <Card>
                    <CardImg top width="100%" src="https://images.lululemon.com/is/image/lululemon/LW5AYNS_029931_1?$image_carousel-lg_2x$" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Align Pant Full Length 28"</CardTitle>
                        <CardSubtitle>lululemon</CardSubtitle>
                        <CardText>These high-rise leggings were designed for yoga with sweat-wicking Nulu fabric.</CardText>
                        <Button active href = "https://shop.lululemon.com/p/women-pants/Align-Pant-Full-Length-28/_/prod8780551?color=0001"> $98.00 </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://images.lululemon.com/is/image/lululemon/LW5BQZS_031382_1?$image_carousel-lg_2x$" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Groove Pant Flare</CardTitle>
                        <CardSubtitle>lululemon</CardSubtitle>
                        <CardText>These flared pants are ready as ever to hug your legs and your core through your practice.</CardText>
                        <Button>$98.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://images.lululemon.com/is/image/lululemon/LW5BHKS_031045_1?$image_carousel-lg_2x$" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Warm Down Jogger II 28"</CardTitle>
                        <CardSubtitle>lululemon</CardSubtitle>
                        <CardText>These soft all-cotton joggers are great whether you're warming up or chilling out. </CardText>
                        <Button>98.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://athleta.gap.com/webcontent/0015/042/994/cn15042994.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Stealth Shortie</CardTitle>
                        <CardSubtitle>Athleta</CardSubtitle>
                        <CardText>High-rise and tight legged with zoned compression. Sleek and supportive panels provide a sculpted look.</CardText>
                        <Button>59.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://athleta.gap.com/webcontent/0015/088/767/cn15088767.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Farallon Short</CardTitle>
                        <CardSubtitle>Athleta</CardSubtitle>
                        <CardText>Semi-fitted, mid-rise shorts that sit at the natural waist 4.5" waist.</CardText>
                        <Button>59.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://athleta.gap.com/webcontent/0015/612/541/cn15612541.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Run Free Short 3.5"</CardTitle>
                        <CardSubtitle>Athleta</CardSubtitle>
                        <CardText>Semi-fitted, mid-rise shorts that sit right below the natural waist.</CardText>
                        <Button>59.00</Button>
                    </CardBody>
                </Card>
            </CardColumns>
            <h3>Yoga Tops</h3>
            <CardColumns>
                <Card>
                    <CardImg top width="100%" src="https://athleta.gap.com/webcontent/0015/616/568/cn15616568.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Unwind Crop Sweatshirt</CardTitle>
                        <CardSubtitle>Athleta</CardSubtitle>
                        <CardText>This oversized cropped sweatshirt fits extra roomy for maximum comfort.</CardText>
                        <Button>$59.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://athleta.gap.com/webcontent/0015/705/791/cn15705791.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Encore Tank</CardTitle>
                        <CardSubtitle>Athleta</CardSubtitle>
                        <CardText>This semi-fitted tank skims over the body easily.</CardText>
                        <Button>$49.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://athleta.gap.com/webcontent/0015/614/126/cn15614126.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Chakra Jacket in Powervita</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This fitted jacket is perfect to throw on over your yoga tights on the way to and from practice. </CardText>
                        <Button>148.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://images.lululemon.com/is/image/lululemon/LW3BJ9S_0001_1?$image_carousel-lg_2x$" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Define Pullover</CardTitle>
                        <CardSubtitle>lululemon</CardSubtitle>
                        <CardText>This four-way stretch pullover was designed to be your warm up and cool down go-to.</CardText>
                        <Button>98.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://images.lululemon.com/is/image/lululemon/LW3ARBS_034181_1?$image_carousel-lg_2x$" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Love Crew III</CardTitle>
                        <CardSubtitle>lululemon</CardSubtitle>
                        <CardText>This crew-neck tee made from Pima Cotton is breathable, soft, and perfect for any occassion.</CardText>
                        <Button>48.00</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://images.lululemon.com/is/image/lululemon/LW1AKAS_0001_1?$image_carousel-lg_2x$" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Brunswick Muscle Tank</CardTitle>
                        <CardSubtitle>lululemon</CardSubtitle>
                        <CardText>Kick back in this breezy muscle tee made from Pima Cotton fabric.</CardText>
                        <Button>48.00</Button>
                    </CardBody>
                </Card>
            </CardColumns>
        </div>
    );
};

export default YogaCard;