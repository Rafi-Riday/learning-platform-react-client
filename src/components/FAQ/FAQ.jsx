import React from 'react';

const FAQ = () => {

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col p-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">FAQ</h1>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-sm shadow-neutral-content bg-base-200">
                        <div className="card-body gap-4 p-4 sm:p-8">
                            <div className="grid grid-cols-1 gap-4 md:gap-5">
                                {/*  */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        HOW DO I FIGURE OUT WHAT TO LEARN?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        The most important thing is that you want to learn something that interests you, because once you start learning, you'll be with this topic for a while. Choosing something just because it's popular or what others are doing isn't the way to go because if you don't have a true interest in it, you'll lose the motivation to learn! Spend some time seriously looking into the different tech career paths before choosing one to go down.
                                    </div>
                                </div>
                                {/*  */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        WHICH PROGRAMMING LANGUAGE IS THE BEST TO LEARN?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        I usually tell most people to start by learning HTML and CSS, then move into learning JavaScript. The reason is that JavaScript is used everywhere: frontend, backend, and even to build mobile apps. It has many use cases, which is why I think it's smart to learn.
                                    </div>
                                </div>
                                {/*  */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        IS IT POSSIBLE TO DO BOTH GRAPHIC DESIGN AND CODING?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        If you have an interest in coding and graphic design, then there's nothing to say you shouldn't learn skills in both areas. They often work hand-in-hand, so having knowledge and skills in both areas could be desirable for certain career paths. You could also think about pursuing something in between like UI design, which is a very in-demand career right now!
                                    </div>
                                </div>
                                {/*  */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        SHOULD I LEARN SKILLS IN SEVERAL AREAS, OR FOCUS ON ONE THING IN PARTICULAR?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        Personally, I'd say choose a path and stick to it! Learning too many things at once will slow you down. Here are a few ideas of things you can choose to focus on, and a little bit about each one.
                                        <br />
                                        <br />
                                        <ul>
                                            <li>* Data science</li>
                                            <li>* Data analysis</li>
                                            <li>* Ruby on Rails</li>
                                            <li>* UX</li>
                                        </ul>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        WHAT'S THE FASTEST WAY/SHORTCUTS TO LEARN TO CODE?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        To be a good programmer, there are no shortcuts. That is not the right way to think about it. Instead, you should take time mastering the fundamentals. This will help you in the long run. I recommend listening to this episode of the podcast about why it's important to focus on the fundamentals first.
                                    </div>
                                </div>
                                {/*  */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        WHERE CAN YOU LEARN THE BASICS OF COMPUTER SCIENCE?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        <ul>
                                            Resources :
                                            <li>* Udacity</li>
                                            <li>* Coursera</li>
                                            <li>* edX</li>
                                            <li>* Treehouse</li>
                                        </ul>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        WHAT IS THE BEST COURSE OF ACTION FOR ME TO LEARN HTML, CSS, AND JAVASCRIPT?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        These are some of the most common languages, and the ones that are most recommended as a starting point for people completely new to coding, so there's a bunch of courses online to help you out.

                                        If you want to focus on front-end, you should definitely master these three first—especially JavaScript. If you know JavaScript well, it won't be hard to become a front-end web developer. There are loads of JavaScript classes online for all different skill levels, whether you're a beginner or looking to level up the skills you have already. I recommend looking into Team Treehouse, and Coursera also has a great class on HTML, CSS, and JavaScript.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;