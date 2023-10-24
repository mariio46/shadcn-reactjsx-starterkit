import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import axios from '@/services/axios';
import { useEffect, useState } from 'react';

export default function Projects() {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getProjects() {
            setLoading(true);
            try {
                const { data } = await axios.get('/projects');
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        }
        getProjects().then((r) => r);
    }, []);
    return (
        <AppLayout title={'Projects'}>
            <div className='mx-auto my-28 max-w-7xl px-4 sm:px-6 lg:px-8'>
                {projects.length ? (
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                        {projects.map((project, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <CardTitle>{project.name}</CardTitle>
                                    <CardDescription>
                                        {project.type} | {project.status}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-foreground'>{project.description}</p>
                                </CardContent>
                                <CardFooter className='flex-wrap gap-2'>
                                    {project.tags.map((tag, i) => (
                                        <small
                                            key={i}
                                            className='inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none'>
                                            {tag.name}
                                        </small>
                                    ))}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : loading === true ? (
                    <div className='flex animate-pulse items-center justify-center text-2xl text-muted-foreground'>
                        Loading...
                    </div>
                ) : (
                    <div className='flex animate-pulse items-center justify-center text-2xl text-muted-foreground'>
                        No projects found...
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
