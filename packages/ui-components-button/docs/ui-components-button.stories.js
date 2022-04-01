import React from 'react';
// We want to always get from source
import { Button } from '../lib/ui-components-button';

export default { title: 'Button' };

export const primary = () => <Button type="primary">Get started</Button>;
export const secondary = () => <Button type="secondary">Get started</Button>;
export const medium = () => <Button size="medium">Get started</Button>;
export const fullWidth = () => <div style={{width: "400px"}}><Button type="secondary" fullWidth>Get started</Button></div>;
export const disabled = () => <Button disabled>Get started</Button>;