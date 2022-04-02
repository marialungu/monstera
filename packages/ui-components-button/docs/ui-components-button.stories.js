import React from 'react';
import { Button } from '../lib/ui-components-button';
import ButtonDocs from './ui-components-button.mdx';

export default {
    title: 'Button',
    component: Button,
    parameters: {
        docs: {
            page: ButtonDocs,
        },
    },
};

export const Primary = () => <Button type="primary" label="Check-in" />
export const Secondary = () => <Button type="secondary" label="Cancel" />
export const Tertiary = () => <Button type="tertiary" label="About" />
export const Large = () => <Button size="large" label="Get started" />
export const Medium = () => <Button size="medium" label="Login" />
export const Small = () => <Button size="small" label="Next" />

export const FullWidth = () => <div style={{width: "400px"}}><Button fullWidth label="Check-in" /></div>
export const Disabled = () => <Button disabled label="Save" />
