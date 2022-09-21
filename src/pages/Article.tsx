import React from "react";

function Article() {
  return (
    <div className="max-w-[590px] my-0 mx-auto">
      <h1 className="pt-12 md:pt-16 pb-2 md:pb-8">
        How to Organize Your Z-Index Using Sass
      </h1>

      <p className="font-serif text-xs md:text-sm">Written by Isaiah Colson</p>

      <hr className="my-12 md:my-16" />

      <div className="pb-8 md:pb-12">
        <p className="font-serif text-lg pb-8 md:text-xl">
          How many times have you tried to add a new piece of styling that
          required adding a z-index property and you found that there is no
          organization for the z-axis of your website? Maybe you have some
          elements with a z-index value of 9999 or other elements that appear
          randomly in the 100-200 range.
        </p>

        <p className="font-serif text-lg pb-8 md:text-xl">
          I never found it an issue for myself until I started working on a team
          with 20+ other developers working in the same codebase.
        </p>

        <p className="font-serif text-lg pb-8 md:text-xl">
          I picked up a bug ticket to fix the z-index of a help icon that we had
          floating in the bottom right corner and I just bumped up the z-index
          until it fit right where it needed to. When a peer of mine reviewed my
          code, they challenged me to find a better way for us to use z-index.
          Here is a solution we found using Sass.
        </p>
      </div>

      <div className="pb-8 md:pb-12">
        <h2 className="pb-6 md:pb-8">Create a Z-Index Map for All Values</h2>

        <p className="font-serif text-lg pb-8 md:text-xl">
          There are different layers to the z-index, so we began by creating a
          map of all of the basic levels. We added this to a file that holds all
          of our global variables, it looks a little like this:
        </p>

        <code className="text-lg p-6 mb-8 md:mb-8 rounded-lg bg-[#f7f6f3] block">
          <div className="text-code-comment italic">// Z-Index Map</div>

          <div>
            <span className="text-code-variable">$zindex</span>
            <span className="text-code-punctuation">: (</span>
          </div>

          <div className="relative left-4">
            <div className="flex flex-wrap">
              <span className="text-code-string">'base'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">0</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'navigation'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">10</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'alert'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">20</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'modal'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">30</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'topLevel'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">40</span>
              <span className="text-code-punctuation">,</span>
            </div>
          </div>

          <div>
            <span className="text-code-punctuation">);</span>
          </div>
        </code>

        <p className="font-serif text-lg pb-8 md:text-xl">
          You'll notice that all layers have an increment of 10, this is a
          personal preference. We considered incrementing by 100 but found that
          we didn't have enough layers for this to be justifiable. These layers
          could've been anything, but we broke them down into these five
          categories based on the current design in our application.
        </p>

        <p className="font-serif text-lg pb-8 md:text-xl">
          We could stop here and just assign every object that requires a
          z-index property to a key-value pair in our map like so:
        </p>

        <code className="text-lg p-6 mb-8 md:mb-8 rounded-lg bg-[#f7f6f3] block">
          <div>
            <span className="text-code-string">.someClass</span>
            <span className="text-code-punctuation">{" {"}</span>
          </div>

          <div className="flex flex-wrap relative left-4">
            <span className="text-code-number">z-index</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-function">map-get</span>
            <span className="text-code-punctuation">(</span>
            <span className="text-code-variable">$map</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-variable">$zindex</span>
            <span className="text-code-punctuation">,</span>
            <span className="w-2"></span>
            <span className="text-code-variable">$key</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-unknown">navigation</span>
            <span className="text-code-punctuation">);</span>
          </div>

          <div>
            <span className="text-code-punctuation">{"}"}</span>
          </div>
        </code>

        <p className="font-serif text-lg pb-8 md:text-xl">
          We challenged ourselves to look for ways this could be reusable,
          require fewer changes to the original map, and be easier to read.
        </p>
      </div>

      <div className="pb-8 md:pb-12">
        <h2 className="pb-6 md:pb-8">Using a Function To Call Your Map</h2>

        <p className="font-serif text-lg pb-8 md:text-xl">
          Our solution was using a function to pass in the desired key and an
          optional addend if one was needed.
        </p>

        <code className="text-lg p-6 mb-8 md:mb-8 rounded-lg bg-[#f7f6f3] block">
          <div className="flex flex-wrap">
            <span className="text-code-keyword">@function</span>
            <span className="w-2"></span>
            <span className="text-code-function">zindex</span>
            <span className="text-code-punctuation">(</span>
            <span className="text-code-variable">$key</span>
            <span className="text-code-punctuation">,</span>
            <span className="w-2"></span>
            <span className="text-code-variable">$addend</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-number">0</span>
            <span className="text-code-punctuation">{") {"}</span>
          </div>

          <div className="relative left-4">
            <div className="flex flex-wrap">
              <span className="text-code-variable">$value</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-function">map-get</span>
              <span className="text-code-punctuation">(</span>
              <span className="text-code-variable">$zindex</span>
              <span className="text-code-punctuation">,</span>
              <span className="w-2"></span>
              <span className="text-code-variable">$key</span>
              <span className="text-code-punctuation">);</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-variable">$new-value</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-variable">$value</span>
              <span className="w-2"></span>
              <span className="text-code-operator">+</span>
              <span className="w-2"></span>
              <span className="text-code-variable">$addend</span>
              <span className="text-code-punctuation">;</span>
            </div>

            <br />

            <div className="flex flex-wrap">
              <span className="text-code-keyword">@return</span>
              <span className="w-2"></span>
              <span className="text-code-variable">$new-value</span>
              <span className="text-code-punctuation">;</span>
            </div>
          </div>

          <div className="flex flex-wrap">
            <span className="text-code-punctuation">{"}"}</span>
          </div>
        </code>

        <p className="font-serif text-lg pb-8 md:text-xl">
          What does this mean?
        </p>

        <p className="font-serif text-lg pb-8 md:text-xl">
          Using the given function, we can pass in the navigation key as the
          first argument. Now the function is responsible for grabbing the
          assigned value from the map we created earlier.
        </p>

        <p className="font-serif text-lg pb-8 md:text-xl">
          We've now changed our thought process of z-index to not be focused on
          numbers but keys instead. The keys represent the layers of our
          application and this helps us to get a better visualization of our
          site.
        </p>

        <p className="font-serif text-lg pb-8 md:text-xl">
          If we use our map from earlier and pass “navigation” as the key, then
          the returned value will be 10. If we decide that a drop-down needs to
          go right above the navigation, we can pass in 1 as the second argument
          and the returned value will now be 11.
        </p>

        <code className="text-lg p-6 mb-8 md:mb-8 rounded-lg bg-[#f7f6f3] block">
          <div className="text-code-comment italic">// Navigation Bar</div>

          <div>
            <span className="text-code-selector">.navigation</span>
            <span className="text-code-punctuation">{" {"}</span>
          </div>

          <div className="flex flex-wrap relative left-4">
            <span className="text-code-property">z-index</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-function">zindex</span>
            <span className="text-code-punctuation">(</span>
            <span className="text-code-unknown">navigation</span>
            <span className="text-code-punctuation">);</span>
          </div>

          <div>
            <span className="text-code-punctuation">{"}"}</span>
          </div>

          <br />

          <div className="text-code-comment italic">// Drop Down</div>

          <div>
            <span className="text-code-selector">.navigation-dropdown</span>
            <span className="text-code-punctuation">{" {"}</span>
          </div>

          <div className="flex flex-wrap relative left-4">
            <span className="text-code-property">z-index</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-function">zindex</span>
            <span className="text-code-punctuation">(</span>
            <span className="text-code-unknown">navigation</span>
            <span className="text-code-punctuation">,</span>
            <span className="w-2"></span>
            <span className="text-code-number">1</span>
            <span className="text-code-punctuation">);</span>
          </div>

          <div>
            <span className="text-code-punctuation">{"}"}</span>
          </div>
        </code>

        <p className="font-serif text-lg pb-8 md:text-xl">
          Here is what our code progression has looked like for something like a
          navigation bar.
        </p>

        <code className="text-lg p-6 mb-8 md:mb-8 rounded-lg bg-[#f7f6f3] block">
          <div className="text-code-comment italic">// Original Value</div>

          <div>
            <span className="text-code-selector">.navigation</span>
            <span className="text-code-punctuation">{" {"}</span>
          </div>

          <div className="flex flex-wrap relative left-4">
            <span className="text-code-property">z-index</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-number">49</span>
            <span className="text-code-punctuation">;</span>
          </div>

          <div>
            <span className="text-code-punctuation">{"}"}</span>
          </div>

          <br />

          <div className="text-code-comment italic">// Using Map</div>

          <div>
            <span className="text-code-selector">.navigation</span>
            <span className="text-code-punctuation">{" {"}</span>
          </div>

          <div className="flex flex-wrap relative left-4">
            <span className="text-code-property">z-index</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-function">map-get</span>
            <span className="text-code-punctuation">(</span>
            <span className="text-code-variable">$map</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-variable">$zindex</span>
            <span className="text-code-punctuation">,</span>
            <span className="w-2"></span>
            <span className="text-code-variable">$key</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-unknown">navigation</span>
            <span className="text-code-punctuation">);</span>
          </div>

          <div>
            <span className="text-code-punctuation">{"}"}</span>
          </div>

          <br />

          <div className="text-code-comment italic">// Using Function</div>

          <div>
            <span className="text-code-selector">.navigation</span>
            <span className="text-code-punctuation">{" {"}</span>
          </div>

          <div className="flex flex-wrap relative left-4">
            <span className="text-code-property">z-index</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-function">zindex</span>
            <span className="text-code-punctuation">(</span>
            <span className="text-code-unknown">navigation</span>
            <span className="text-code-punctuation">);</span>
          </div>

          <div>
            <span className="text-code-punctuation">{"}"}</span>
          </div>
        </code>

        <p className="font-serif text-lg pb-8 md:text-xl">
          This also works if you need to drop an element below the desired
          layer.
        </p>

        <p className="font-serif text-lg pb-8 md:text-xl">
          Let's say that there is a slightly transparent background that needs
          to go below the navigation, we can pass -1 as the second argument and
          the returned value will now be 9.
        </p>

        <code className="text-lg p-6 mb-8 md:mb-8 rounded-lg bg-[#f7f6f3] block">
          <div className="text-code-comment italic">// Navigation Bar</div>

          <div>
            <span className="text-code-selector">.navigation</span>
            <span className="text-code-punctuation">{" {"}</span>
          </div>

          <div className="flex flex-wrap relative left-4">
            <span className="text-code-property">z-index</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-function">zindex</span>
            <span className="text-code-punctuation">(</span>
            <span className="text-code-unknown">navigation</span>
            <span className="text-code-punctuation">);</span>
          </div>

          <div>
            <span className="text-code-punctuation">{"}"}</span>
          </div>

          <br />

          <div className="text-code-comment italic">
            // Transparent Background
          </div>

          <div>
            <span className="text-code-selector">.navigation-background</span>
            <span className="text-code-punctuation">{" {"}</span>
          </div>

          <div className="flex flex-wrap relative left-4">
            <span className="text-code-property">z-index</span>
            <span className="text-code-punctuation">:</span>
            <span className="w-2"></span>
            <span className="text-code-function">zindex</span>
            <span className="text-code-punctuation">(</span>
            <span className="text-code-unknown">navigation</span>
            <span className="text-code-punctuation">,</span>
            <span className="w-2"></span>
            <span className="text-code-number">-1</span>
            <span className="text-code-punctuation">);</span>
          </div>

          <div>
            <span className="text-code-punctuation">{"}"}</span>
          </div>
        </code>
      </div>

      <div className="pb-8 md:pb-12">
        <h2 className="pb-6 md:pb-8">Add New Layers to the Z-Index Map</h2>

        <p className="font-serif text-lg pb-8 md:text-xl">
          Now let's say we needed to add the help icon mentioned in the
          beginning.
        </p>

        <p className="font-serif text-lg pb-8 md:text-xl">
          The solution is simple, let's just add the new key-value pair to the
          map we created earlier on a new line where we'd like it to be placed
          along the z-axis.
        </p>

        <code className="text-lg p-6 mb-8 md:mb-8 rounded-lg bg-[#f7f6f3] block">
          <div className="text-code-comment italic">
            // Z-Index Map Original
          </div>

          <div>
            <span className="text-code-variable">$zindex</span>
            <span className="text-code-punctuation">: (</span>
          </div>

          <div className="relative left-4">
            <div className="flex flex-wrap">
              <span className="text-code-string">'base'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">0</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'navigation'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">10</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'alert'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">20</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'modal'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">30</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'topLevel'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">40</span>
              <span className="text-code-punctuation">,</span>
            </div>
          </div>

          <div>
            <span className="text-code-punctuation">);</span>
          </div>

          <br />

          <div className="text-code-comment italic">
            // Z-Index Map w/ Help Location
          </div>

          <div>
            <span className="text-code-variable">$zindex</span>
            <span className="text-code-punctuation">: (</span>
          </div>

          <div className="relative left-4">
            <div className="flex flex-wrap">
              <span className="text-code-string">'base'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">0</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'navigation'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">10</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="text-code-comment italic">
              // add help below and adjust the values that follow
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'help'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">20</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'alert'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">30</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'modal'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">40</span>
              <span className="text-code-punctuation">,</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-code-string">'topLevel'</span>
              <span className="text-code-punctuation">:</span>
              <span className="w-2"></span>
              <span className="text-code-number">50</span>
              <span className="text-code-punctuation">,</span>
            </div>
          </div>

          <div>
            <span className="text-code-punctuation">);</span>
          </div>
        </code>

        <p className="font-serif text-lg pb-8 md:text-xl">
          We've not only easily added a new value with a one-line change, but
          we've also updated every other z-index property that appears higher
          than the newly added key-value pair. All areas that use this map,
          directly or through the function, will now automatically be updated.
        </p>
      </div>
    </div>
  );
}

export { Article };
