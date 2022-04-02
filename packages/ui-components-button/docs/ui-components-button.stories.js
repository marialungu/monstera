import React from 'react';
import { Button } from '../lib/ui-components-button';

export default {
    title: 'Button',
    component: Button
};

const label = "Check-in"

export const ButtonTypes = () => (
    <>
        <Button type="primary" label={label} />
        <Button type="secondary" label={label} />
        <Button type="tertiary" label={label} />
    </>
)

export const Sizes = () => (
    <>
        <Button size="large" label={label} />
        <Button size="medium" label={label} />
        <Button size="small" label={label} />
    </>
)

export const FullWidth = () => <div style={{width: "400px"}}><Button fullWidth label={label} /></div>
export const Disabled = () => <Button disabled label={label} />
