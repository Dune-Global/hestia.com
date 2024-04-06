"use client"

import PageHeader from '@/components/common/layout/PageHeader'
import HostelGallery from '@/components/landLord/HostelGallery'
import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
    return (
        <>
            <PageHeader title={params.slug} isSearch={false} />
            <div>
                <HostelGallery />
            </div>
        </>
    )
}