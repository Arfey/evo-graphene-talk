import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import '../assets/main.css';
import "prismjs/themes/prism.css";
import CodeSlide from 'spectacle-code-slide';



require('normalize.css');

const images = {
  graph: require('../assets/graph.jpg'),
  kat: require('../assets/kat.png'),
  demo: require('../assets/demo.png'),
};


const theme = createTheme({
  primary: "#039BE5",
  secondary: "#607D8B"
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >

        <Slide
          transition={['slide']}
          bgImage={"https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F9744f25f43dda5a771ec4912ba00432c%2F205903999%2Fsamsung-graphene-ball-battery-2017-11-29-01.jpg&client=amp-blogside-v2&signature=36fcdb5fd2e5e64c4c61bfc6bf91368a2d94eec5"}
          bgDarken={0.75}
        >
          <Appear>
            <div>
              <Heading size={1} caps fit textColor="primary">
                Graphene
              </Heading>
              <Heading size={1} caps fit textColor="tertiary">
                or how to make the graphql api simple
              </Heading>
            </div>
          </Appear>
        </Slide>


        <Slide transition={["zoom"]} bgColor="default">
          <Heading size={1} fit lineHeight={1} textColor="secondary" textColor="black">
            What is the modern web project?
          </Heading>
          <List textColor="white">
            <Appear>
              <ListItem>React + TypeScript</ListItem>
            </Appear>
            <Appear>
              <ListItem>GraphQl</ListItem>
            </Appear>
            <Appear>
              <ListItem>Apollo stack</ListItem>
            </Appear>
          </ List>
        </Slide>


        <Slide >
          <ComponentPlayground theme="dark" code={require('raw-loader!../assets/apollo.example')}/>
        </Slide>


        <Slide transition={['fade']} bgColor="black" textColor="white">
          <Heading size={2} lineHeight={1} textColor="secondary" textColor="primary">
            Cannot read property 'name' of undefined
          </Heading>
        </Slide>


        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          goTo={4}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
        >
          <Image src={'https://raw.githubusercontent.com/dotansimha/graphql-code-generator/master/logo.png'} margin="0px auto 40px" />
        </Slide>




        <Slide transition={['fade']} bgColor="black" textColor="white">
          <Heading size={2} lineHeight={1} textColor="secondary" textColor="primary">
            GraphQl
          </Heading>
          <List>
            <Appear>
              <ListItem>Query (GET)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Mutation (POST, PUT, DELETE)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Subscription (websocket)</ListItem>
            </Appear>
          </List>
        </Slide>


        <Slide
          transition={['slide']}
          bgImage={images.graph.replace('/', '')}
          bgDarken={0.75}
        >
        <Anim
            onAnim={(forwards, animIndex) => {
              /* eslint-disable */
              console.log('forwards ', forwards);
              console.log('animIndex ', animIndex);
              /* eslint-enable */
            }}
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)'
              },
            ]}
            easing={'bounceOut'}
            transitionDuration={500}
          >
          
          <div>
              <Heading size={6}  caps fit textColor="primary">
                Graphene
              </Heading>
              <List textColor="white">
                <Appear>
                  <ListItem>Query, Mutation, "Subscription"</ListItem>
                </Appear>
                <Appear>
                  <ListItem>92 contributors</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Rich community</ListItem>
                </Appear>
                <Appear>
                  <ListItem>The owner is a big fan of apollo</ListItem>
                </Appear>
              </List>
            </div>
          </ Anim>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Easy to learn (about 10min)
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Support
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            aiohttp, django, flask, PYRAMID
          </Heading>
        </Slide>

        <CodeSlide
            transition={["fade"]}
            lang="python"
            textSize=".6em"
            bgColor="secondary"
            code={require("raw-loader!../assets/deck.example")}
            ranges={[
              { loc: [0, 0], title: "Queries" },

              { loc: [0, 16]},
              { loc: [6, 8], note: "The `graphene.ObjectType` is main object for defines query in graphene." },
              { loc: [9, 14], note: "Base scalars: String, Int, Float, Boolean, ID, DateTime, JSONString ..." },
              { loc: [10, 11], note: "params: description, deprecation_reason, default_value ..." },
              { loc: [13, 17]},
              { loc: [18, 25]},
              { loc: [26, 46], note: "defines model" },
              { loc: [47, 81]},
              { loc: [50, 51]},
              { loc: [51, 55], note: "this field will return a list of current type"},
              { loc: [59, 66]},
              { loc: [55, 60], note: "this field will return a current type"},
              { loc: [57, 58]},
              { loc: [66, 74]},
              { loc: [75, 80], note: "explicitly identify"},
              { loc: [81, 96], note: "combinate fields"},
              { loc: [96, 104]},
              { loc: [108, 116], note: "nested structure"},
              { loc: [116, 125]},
              { loc: [125, 142], title: "Dataloader" },
              { loc: [125, 126]},
              { loc: [127, 130]},
              { loc: [131, 140]},
              { loc: [145, 155], note: "load, load_meny"},
              { loc: [154, 154], title: "Mutation" },
              { loc: [155, 173]},
              { loc: [174, 210]},
              { loc: [209, 229]},
              { loc: [209, 211], note: "The `graphene.Mutation` is main object for defines mutation in graphene."},
              { loc: [212, 216], note: "required"},
              { loc: [217, 219], note: "Body of response"},
              { loc: [219, 229]},
              { loc: [209, 229]},
              { loc: [229, 237]},

              { loc: [237, 237], title: "What about errors? 💥" },
              { loc: [237, 243]},
              { loc: [245, 257]},
              { loc: [256, 256], title: "Subscription" },
            ]} />



        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          id="wait-what"
          goTo={4}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
        >
          <Image src={images.demo.replace('/', '')} margin="0px auto 40px" />
        </Slide>


        <Slide
          transition={['slide']}
        >
          <div>
              <Heading size={6}  caps fit textColor="black">
                what's next?
              </Heading>
              <List textColor="white">
                <Appear>
                  <ListItem>Enums</ListItem>
                </Appear>

                <Appear>
                  <ListItem>Interface</ListItem>
                </Appear>

                <Appear>
                  <ListItem>InputObjectType</ListItem>
                </Appear>

                <Appear>
                  <ListItem>Middleware</ListItem>
                </Appear>

                <Appear>
                  <ListItem>...</ListItem>
                </Appear>
              </List>
            </div>
        </Slide>


        <Slide
          transition={['slide']}
          bgImage={"https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F9744f25f43dda5a771ec4912ba00432c%2F205903999%2Fsamsung-graphene-ball-battery-2017-11-29-01.jpg&client=amp-blogside-v2&signature=36fcdb5fd2e5e64c4c61bfc6bf91368a2d94eec5"}
          bgDarken={0.75}
        >
            <div>
              <Heading size={1}  textColor="primary">
                Q&A
              </Heading>
            </div>
        </Slide>

      </Deck>
    );
  }
}