let outputContainer1 = document.getElementById("outputContainer");

document.getElementById("Question01").addEventListener("click", function () {
    outputContainer1.innerHTML = `
        <div>
            
            <div class="incorrectCode">
            <p>Fix the bugs in below snippet</p>
            <pre>
                <code>
                &lt;html lang=&quot;en&quot;&gt;
                    &lt;head&gt;
                        &lt;title&gt;Document
                            &lt;body&gt;
                                guvi
                        &lt;/title&gt;
                    &lt;/head&gt;
                    &lt;div&gt;
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        &lt;div&gt;
                            &lt;div&gt;
                                Guvi Geek Network
                            &lt;/div&gt;
                        &lt;/body&gt;
                    &lt;/html&gt;
                </code>
            </pre>
            </div>
            
            <div class="coorectedCode">
            <p>Fixed</p>
            <pre>
            <code>
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;title&gt;Quastion 1&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;div&gt;
                        &lt;p&gt;guvi&lt;/p&gt;
                        &lt;div&gt;
                            &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;/p&gt;
                            &lt;div&gt;
                                &lt;p&gt;Guvi Geek Network&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/html&gt;
            </code>
            </pre>
            </div>

        </div>
    `;
});

document.getElementById("Question02").addEventListener("click", function () {
    outputContainer1.innerHTML = `
        <div>

            <div class="incorrectCode">
            <p>Try the below one</p>
            <pre>
            <code>
                &lt;html lang=&quot;en&quot;&gt;
                    &lt;head&gt;
                        &lt;title&gt;Document
                            &lt;body&gt;
                                guvi
                    &lt;/head&gt;
                    &lt;div&gt;
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        &lt;div&gt;
                            &lt;div&gt;
                                Guvi Geek Network
                            &lt;/div&gt;
                        &lt;/body&gt;
                    &lt;/html&gt;
            </code>
            </pre>
            </div>
            
            <div class="coorectedCode">
            <p>Fixed</p>
            <pre>
            <code>
                &lt;html lang=&quot;en&quot;&gt;
                &lt;head&gt;
                    &lt;title&gt;Quastion 2&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;div&gt;
                        &lt;p&gt;guvi&lt;/p&gt;
                        &lt;div&gt;
                            &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;/p&gt;
                            &lt;div&gt;
                                &lt;p&gt;Guvi Geek Network&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/body&gt;
                &lt;/html&gt;
            </code>
            </pre>
            </div>

        </div>
    `;
});