import React from "react";
import Head from "next/head";
import Button from "../components/globals/button";


function TermsAndConditions({ posts }) {
  return (
    <main className='h-screen'>
      <section>
        <div className='flex justify-center flex-col align-center items-center h-screen'>
          <p>Must be over 18!</p>
          <p>Be prepared to get very drunk</p>
          <p>
            Have read our <a>terms and conditions</a> here
          </p>
          <div>
            <Button words='Get Drunk!' link='drink' />
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default TermsAndConditions;
