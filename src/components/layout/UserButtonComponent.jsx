'use client'

import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt, Projector } from 'lucide-react'
import React from 'react'

const UserButtonComponent = () => {
  return (
    <div>
          <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Organization"
                  labelIcon={<ChartNoAxesGantt size={15} />}
                  href="/onboarding"
                >
                  <UserButton.Action></UserButton.Action>
                </UserButton.Link>
                <UserButton.Link
                  label="My Projects"
                  labelIcon={<Projector size={15} />}
                  href="/projects"
                >
                  <UserButton.Action></UserButton.Action>
                </UserButton.Link>
              </UserButton.MenuItems>
            </UserButton>
    </div>
  )
}

export default UserButtonComponent