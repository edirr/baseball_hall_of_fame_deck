import React, { Component } from "react";
import "./style.css";

const AboutTheHallText = props => {
  return (
    <div class="container is-fluid">
      <div class="notification">
        <div className="text">
          <p>
            Each year, the Baseball Writers’ Association of America announce the
            inductees of the Baseball Hall of Fame. The new additions will join
            a list that has been growing since Ty Cobb, Babe Ruth, Honus Wagner,
            Christy Mathewson and Walter Johnson made up the first class, in
            1936.
          </p>
          <br />
          <p>
            But it was not until 1939 that the Hall of Fame would acquire its
            physical location, in celebration of the 100th anniversary of Abner
            Doubleday’s supposed—but already-dubious—invention of the sport in
            Cooperstown, N.Y., as TIME explained in the lead-up to that
            centennial year:
          </p>
          <br />
          <img className="image" src="https://i.imgur.com/e5z9uCK.jpg" ALIGN="left" />
          <p>
            It was not until 1907, 14 years after General Doubleday’s death,
            that a research committee definitely established Cooperstown as the
            birthplace of baseball. Civic-proud Cooperstownians, whose pastoral
            background had already been immortalized as the home town and
            nameplace of James Fenimore Cooper, bought the original baseball
            field, spent $25,000 to transform it into a modern ball park and
            public playground, named it Doubleday field.
          </p>
          <br />
          <p>
            Three years ago [in 1935], in anticipation of the 100th birthday of
            the game, baseball bigwigs and benefactors joined hands to make
            Cooperstown a bigger, better shrine. To preserve its treasures,
            baseball sentimentalists decided to build an imposing three-story
            colonial brick museum. To immortalize its heroes, baseball
            administrators voted to establish therein a Baseball Hall of Fame
            —to take the form of bronze plaques placed around the first floor
            exhibition hall…
          </p>
          <br />
          <p>
            There are two ways to become an Immortal: 1) election by a 75% vote
            of the members of the Baseball Writers Association, who have been
            given the task of choosing players whose careers ended some time
            between 1900 and the year of election; 2) selection by a committee
            of oldsters, who choose 19th Century heroes.
          </p>
          <br />
          <p>
            The “oldsters” aren’t around anymore, but the 75% rule is still in
            effect for inclusion in the Hall of Fame.
          </p>
          <br />
          <p>
            So, as TIME’s Richard Corliss put it many decades later, “the Hall
            of Fame, like the Miss America Pageant or the Mount Rushmore
            sculptures, was essentially a Chamber of Commerce inspiration to
            lure tourists.”
          </p>
          <br />
          <p>
            “But,” he continued, “when the Hall opened in 1939, it became a
            secular shrine, the Lourdes of baseball. It still is.”
          </p>
          <br />
          <br />
          <p className="credit">Article by: Lily Rothman, TIME magazine</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTheHallText;
