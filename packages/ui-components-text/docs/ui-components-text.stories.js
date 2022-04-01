import React from 'react';
import { Text } from '../lib/ui-components-text';

export default { title: 'Text' };

export const Body = () => <Text>Get started</Text>;
export const Hero = () => <Text type="hero">Get started</Text>;
export const Headline1 = () => <Text type="h1">Get started</Text>;
export const Headline2 = () => <Text type="h2">Get started</Text>;
export const Headline3 = () => <Text type="h3">Get started</Text>;
export const Caption = () => <Text type="caption">Get started</Text>;

export const Showcase = () => (
    <div style={{width: "700px"}}>
        <Text type="hero">Welcome!</Text>
        <Text type="h1">Lorem ipsum</Text>
        <Text type="h2">Lorem ipsum ipsum ipsum</Text>
        <Text type="h3">Lorem ipsum ipsum ipsum</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie turpis vitae magna mattis faucibus.
            Fusce a fermentum mauris. Vestibulum volutpat tortor quis faucibus porta. Fusce lobortis nulla nec augue lobortis, et rutrum turpis auctor.
            Donec quam mi, accumsan sit amet lacus a, imperdiet vestibulum libero.
        </Text>
    </div>
)