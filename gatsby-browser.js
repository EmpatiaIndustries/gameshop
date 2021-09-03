import { Layout } from './src/components';

const React = require('react');
require("./src/pages/index.css");
require('antd/dist/antd.css');

export const wrapRootElement = ({ element }) => (
    <Layout>
        {element}
    </Layout>
);
