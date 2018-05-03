import React from 'react';

const ProjectsAPI = {
  projects: [
    { tag: 0, 
      name: "User Experience Design",
      description: <p>As part of a team of five students, I interviewed numerous older adults to identify their needs and values. From these interviews, we found that older adults have a need to communicate with their families and feel connected. Oftentimes, family members share photos online that are never seen by their older relatives because they do not use the same media (Facebook, Snapchat, Instagram, etc.). For one semester, my team worked on developing an app that aims to incorporate ease of sharing with a simpler interfacethat makes staying connected easier for older adults.
        <br/><br/>
        We did not build a real app, but we did create an interactive mock-up that can be viewed <a target="_blank" rel="noopener noreferrer" href="https://marvelapp.com/aj428be/screen/35544997">here</a>.</p>
    },

    { tag: 1, 
      name: "Agent-Based Modeling of Street Crime",
      description: <p>Research consistently shows that people living in poverty commit more crimes than people living in high-income households. This can be due to a variety of factors, such as employment accessibility, residential instability, and general distrust, but the most commonly cited factor is income and wealth inequality, which is the factor I investigate with one other student using a model. We build off of a model from a report written by Elizabeth Groff, <em>Simulation for theory testing and experimentation</em>, with an agent-based model of <code>Citizens</code> in <code>CrimeWorld</code>, an environment where each <code>Citizen</code> has their own characteristics and behavioral rules, including the <code>Citizen</code>’s likelihood of committing crimes. Comparing our results to Groff's, we observe that our results behave qualitatively similarly. Then, by extending Groff's experiment, we implement a harsh <code>CrimeWorld</code>, which is a graph-like world where each node is a street intersection. This world deals out punishment for committing crimes, and we make some surprising discoveries based on this model.
        <br/><br/>
        If you'd like to learn more about our experiment and view our source code, you can visit our Github repository <a target="_blank" rel="noopener noreferrer" href="https://github.com/ericasaywhat/SmoothCriminals">here</a>.</p>
    },

    { tag: 2, 
      name: "Hunt the Wumpus",
      description: <p>I worked with one other student to implement a game in C called <em>Hunt the Wumpus</em>. For context, <em>Hunt the Wumpus</em> is a game invented by Gregory Yob in 1975 in which a player wanders a map to find and hunt a monster called the Wumpus. There are three perils located randomly on the map: bats that will carry the player to another random location on the map, a bottomless pit that will trap the player forever, and of course, the Wumpus, which will eat the player if the player happens to cross paths with it. The original game was text-based, so there was no visual map - only textual cues that tell the player where they are in the map and what is near them. For example, if the Wumpus is one node away from the player, a text prompt such as “You smell a wumpus!” might appear.
        <br/><br/>
        Our rendition of Hunt the Wumpus implements all of these behaviors and stays as true to the rules of the original game as possible. However, we also implement a few additional features in order to challenge ourselves and to make the game easier to play.
        <br/><br/>
        If you'd like to learn more about the game and view our source code, you can visit our Github repository <a target="_blank" rel="noopener noreferrer" href="https://github.com/ericasaywhat/SoftSysNybbles">here</a>.</p>
    },

    { tag: 3, 
      name: "Online Chatroom in C",
      description: <p>[fill this in later]
        <br/><br/>
        If you'd like to learn more about the chatroom and view our source code, you can visit our Github repository <a target="_blank" rel="noopener noreferrer" href="https://github.com/ericasaywhat/SoftSysNybbleRoom">here</a>.</p>
    },


    { tag: 4,
      name: "Apache Geode & Pivotal GemFire",
      description: <p>This past summer, I worked at Pivotal as an intern on the GemFire Management and Monitoring team. During this time, I worked on Pivotal GemFire and its open-source counterpart, Apache Geode. I had the opportunity to pair-program with my teammates to squash bugs and create features, and I learned the ropes of how a software company like Pivotal is operated. I participated in a workshop organized and run by Elisabeth Hendrickson, Pivotal's VP of Data R&D, which dove into agile development and how it can improve the productivity of any workplace. For three weeks I also worked with and learned from acclaimed author Michael Feathers on refactoring and improving our code base.
      <br/><br/>
      Much of what I did involved developing and testing existing software. The work was often challenging and engaging, and I was always surrounded by people who were experts in agile development, concurrent systems testing, and intricacies regarding the products. It was a huge honor to be able to contribute to Apache Geode, an open-source project that people all over the world have worked on, as well as Pivotal GemFire, a data management platform that is used by companies like GE and Indian Railways.</p> },
    
    { tag: 5,
      name: "Calmmute",
      description: <p>Calmmute is inspired by the idea that commutes are cognitively important: having time between engagements allows our brains to finish processing the last thing we did before they begin working on the next. In the Hacking the Library course, my partner and I noticed that people at our college often either schedule meetings back to back, or use their awkward time between meetings to do more work. Both of these scenarios remove the precious commute time that can allow for stress relief and mental refreshment. As a result, we spun up Calmmute, an application that pairs simple, quick yoga exercises with time management to allow people to use their commute time more effectively.
      <br/><br/>
      Calmmute uses a Python backend engine that uses user input to determine the type of yoga pose to display on its main page, then randomly selects an appropriate yoga pose. The main page displays the pose's instructions, as well as an instructional video.</p> },

    { tag: 6,
      name: "Olin Community Calendar",
      description: <p>The Olin Community Calendar is inspired by the fact that currently, email is the primary way for students to find out about events that have happened, are happening, or will happen on campus. In the Hacking the Library course, my partner and I decided to explore an alternative method of event storage and display. We came up with a community calendar, in which events are arranged by date and can be accessed and edited by the community.
      <br/><br/>
      The code itself is essentially a Flash webapp. There is a server that acts as the skeleton of the website, some statuc resources (including backgrounds and a CSS file), and several HTML templates that display data and other information to the user. Data is passed from HTML templates to the server via HTML form inputs. The Flask backend receives this information as a dictionary request form, and parses it to retrieve relevant information. Data is passed back into the HTML frontend via Flask. The events on the calendar are stored in a postgreSQL server provided by Heroku. Finally, psycopg2 is used as a connector between the Python code and the database.</p> },

    { tag: 7,
      name: "Project: Projects",
      description: <p>After surveying 45 students at Olin (a whole 12.8% of the student body), it was discovered that recording projects is something of an ordeal for most Oliners. Some respondents created their own websites and portfolios, while about a third said that they had not created any kind of professional project archive yet. In addition, about half of the respondents reported that they update their websites, portfolios, or PDFs only when job season is imminent. This all seemed to be a strong sign that the experience of recording projects at Olin has room for improvement. All of this feedback was gathered to form the basis for the creation of this project.
      <br/><br/>
      Project: Projects is going to make the lives of students easier by facilitating the creation of portfolios and lowering the activation energy for recording projects, and it's also going to make the lives of faculty easier by placing all student projects in one convenient location. The frontend of the application is built using React, and the backend is built using Python. Projects are stored and accessed in JSON format using a MongoDB database.</p> },

    { tag: 8,
      name: "The Real Boiz", 
      description: <p>This project was the final assignment in a Principles of Engineering course. I worked with a team of five to complete this project, which centered around Inigo Montoya's iconic swordfighting scene in The Princess Bride. Together, we created a system of multiple mechanically controlled marionettes contained within a box stage, modeling our mechanical system after traditional marionette manipulation using several lever systems.
      <br/><br/>
      In order to move our marionettes translationally across the stage, we designed and built a gantry to hang across the top of our stage. We also built a pulley system to draw the curtains when an audience is detected via infrared sensors. We programmed a set of actuators to make the marionettes perform various movements. We finally integrated the aforementioned infrared sensors, as well as LED lights, into the stage to make our final product more interactive and inviting.</p> },
    
    { tag: 9,
      name: "Principles of Engineering",
      description: <p>Throughout the first few weeks of my Principles of Engineering course, I completed a set of projects with a partner. The first involved building a bike light with various flashing patterns using several LEDs, a potentiometer, and an Arduino. The second involved building a three-dimensional scanner that sent data to a laptop using an IR sensor, two hobby servos, a pan-tilt mechanism designed and 3-D printed by my partner and me, and an Arduino. Finally, the last lab involved building a line-following robot using various mechanical parts, two IR sensors, and an Arduino.</p> },

    { tag: 10,
      name: "Biology Research at Olin College", 
      description: <p>With guidance from a faculty advisor and assistant professor of biology, I worked with a group of students to study and investigate microbial communities, halophiles, network analysis, and other topics. We also joined other microbiologists and attended conferences in Boston and New York. I was especially involved in analyses of collective motion among highly concentrated colonies of <em>E. coli</em> bacteria, as well as research into the potential usages of <em>Pseudomonas</em> bacteria in disposing of plastic waste. Finally, I worked on research papers about the behavior of <em>Halobacillus</em> bacteria, which may have future potential usages in disposing of super saline waste.</p> },

    { tag: 11,
      name: "The Dueling Association",
      description: <p>As a big fan of Harry Potter, I was excited to have the opportunity to work with a partner to create a Harry Potter themed dueling game. In this game, the player battles against Voldemort and his army of villains. Voldemort casts a number of spells, which inflict damage on the player. The player can return fire by waving their own wand in certain patterns, thereby casting spells. In implementing this game, we used the organizational system known as Model-View-Controller. Our "model" contained the state of our core gameplay mechanics, such as hitpoints and damage points, and tracked whether or not spells had been cast. Our "view" displayed the gameplay itself using Python libraries, pygame and OpenCV. Finally, our controller allowed the player to use their "wand" (which is detected with OpenCV) to cast spells, select menu options, and thereby play the game.</p> },

    { tag: 12,
      name: "Modeling & Simulation of the Physical World",
      description: <p>In this course, I completed a series of projects applying the tools of mathematical modeling and computer simulation to systems that change over time. Some of these projects included ecological networks of predators and prey, heating and cooling systems in houses, planetary systems, cars and planes, and other mechanical systems. I practiced data visualization and oral presentation.</p> }
  ],
  all: function() { return this.projects},
  get: function(id) {
    const isProject = p => p.tag === id
    return this.projects.find(isProject)
  },
  howmany: function() { return 13 }
}

export default ProjectsAPI;