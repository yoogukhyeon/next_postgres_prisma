import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: '공지사항',
};

const NoticePage = () => {
	return <div className="text-4xl">공지사항</div>;
};

export default NoticePage;
