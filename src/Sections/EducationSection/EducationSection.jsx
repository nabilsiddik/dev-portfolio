import React from 'react'
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineDot, TimelineOppositeContent,
  TimelineContent
} from "@mui/lab";

import { Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import { FaGraduationCap } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


const EducationSection = () => {
  return (
    <section id='education_section' className='py-20 bg-[#f6f3fc] flex items-center justify-center'>
      <div className="container">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              BUBT
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary">
                <FaGraduationCap />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '30px', px: 2 }}>
              <div className='text-primary mb-5'>
                <Typography variant="h3" component="span">
                  <h3 className='font-bold'>Educational Qualification</h3>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" component="span">
                  <p className='font-bold mb-1'><span className='text-primary'>Degree:</span> B.sc. in Computer Science and Engineering</p>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" component="span">
                  <p className='font-bold'><span className='text-primary'>Institution:</span> Bangladesh University of Business and Technology.</p>
                </Typography>
              </div>
              <Typography>
                <div className='mt-3'>
                  <p className='mb-3'>From my childhood I was fond of computer and electronics devices. When I grow up, I become more interested in this things. Also I am in love with various programming languages.</p>

                  <p>Ater my HSC I admited myself to a wel known reputated University. I am studying Computer Science and Engineering at <u><b><a target='_blank' href="https://www.bubt.edu.bd/">Bangladesh University of Business and Technology</a></b></u>.</p>
                </div>
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Freelancer
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '30px', px: 2 }}>
              <div className='text-primary mb-5'>
                <Typography variant="h3" component="span">
                  <h3 className='font-bold'>Experience</h3>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" component="span">
                  <p className='font-bold mb-3'>Freelancing</p>
                </Typography>
              </div>
              <Typography>
                <div className='mt-3'>
                  <p className='mb-3'>I worked on some of the freelance marketplaces and also with some clients outside of the marketplace.</p>
                </div>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Programming Hero
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <FaCode />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '30px', px: 2 }}>
              <div className='text-primary mb-5'>
                <Typography variant="h3" component="span">
                  <h3 className='font-bold'>Courses</h3>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" component="span">
                  <p className='font-bold mb-1'><span className='text-primary'>Title:</span> Full Stack Web Development (MERN)</p>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" component="span">
                  <p className='font-bold'><span className='text-primary'>Institute:</span> Programming Hero</p>
                </Typography>
              </div>
              <Typography>
                <div className='mt-3'>
                  <p className='mb-3'>I enrolled in <u><b><a target='_blank' href="https://www.programming-hero.com/">Programming Heros</a></b></u> Full Stack Web Development with MERN Stack and successfully completed the course. The duration was six months.</p>

                  <p>This course has had a huge impact on my web development journey. I learned a lot of things related to Front-End, Back-End, Database, and others related to soft skills.</p>
                </div>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  )
}

export default EducationSection
