"use client"

import Form from "@components/Form";
import React, { useState } from "react";

const Profile = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });
    const createPrompt = async (e) => {

    }


    return (
        <Form
            type = "Create"
            post = {post}
            setPost = {setPost}
            submitting = {submitting}
            handleSubmitting = {createPrompt}
        />
    );
};

export default Profile;
