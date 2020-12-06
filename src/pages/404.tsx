import React from 'react';
import { NextPage } from 'next';
import Error from 'next/error';

const Custom404: NextPage = () => <Error statusCode={404} />;

export default Custom404;
