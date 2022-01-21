// 1. create a file for all code of text editor
// 4. importing quill
import Quill from "quill"
// 5. importing already install css from quill
import "quill/dist/quill.snow.css"
// 12. also importing useEffect
// 18. import useRef also
// 31. importing useCallback
import { useEffect, useRef, useCallback } from 'react';

export default function Editor() {
    // 17. define useRef wrapper
    // 34. removing useRef now.
    // const wrapper = useRef()

    // 7. creating a new instance of quill, we only wanted to do this once when we render our page
    // 8. adding these empty square brackets so that useEffect will run only one time
    // 9: useEffect is a react hook which trace the side effects if we re-render the page or even a single resource on the page.
    //    it has a function which runs every time the resources are re-rendered.
    //    The second parameter of this react hook is an array (square brackets) [] which takes your choice of resource of the page which changes and you only want to run the function/hook when this resource changes.
    //    So we want it to run only once, hence, we will use an empty array.
    // 28. but useEffect sometimes occurs even before all of your refs are properly set.
    // 29. so it could be a problem that our wrapper is not even defined before useEffect comes into play
    // 30. so instead of using useEffect, we can use a callback.
    // 32. useCallback is going to pass our wrpr inside of it. (also change every wrapper to wrpr inside of the useCallback())
    // 33. also setting it to a wrapper const, and removing useRef.
    // 34. so now, we are going to use a callback function and passing it to our ref in the main return section i.e ref={wrapper} (beside id=container)
    // 36. now we know that wrpr here is always defined.
    // useEffect(() => {
    const wrapper = useCallback((wrpr) => {
        // 40. but first we are making sure if we have a wrpr
        if(wrpr == null) return
        // 39. so at the start we are setting the innerHTML to an empty string every time is runs
        wrpr.innerHTML = ''

        // 18. now with useRef, we can have access to this element and create new elements
        // 19. here, creating a random div
        const editor = document.createElement('div')
        // 20. now this editor will be passed in the new Quill

        // 22. we can not put this editor inside our wrapper
        // 23. using .current use use the current instance which is the current div in the return section
        // 24. and all we wan to append our editor
        // wrapper.current.append(editor)
        // 25. now as soon as the  quill is created, it is going put all inside our id=container including all the toolbars.
        // 37. now wrpr is going to append things
        wrpr.append(editor)

        // 10. new quill will require a selector that is going to be the id of the div that we are returning
        // 11. and added a theme from the quill css
        // 21. passing the const editor to new Quill instead of the id=container
        // new Quill('#container', {theme: 'snow'})
        new Quill(editor, {theme: 'snow'})

        // 38. but in useCallback, we don't have a return style cleanup.
        // 41. so removing this return cleanup. And now it runs great!
        // 26. hence, now we can clean everything inside our main div i.e, id=container every time useEffect runs.
        // 27. for that, returning while setting the html to an empty string.
        // return () =>{
        // wrapper.innerHTML = ''
        // }
    }, [])
    // 6. added an id to the div

    // 13. now all this div will be wrapped by the quill text editor frame/element/toolbar.
    // 14. but if we re-render our app, it will start adding more of those toolbars for every new render.
    // 15. What we can do is to put our editor inside this id=container
    // 16. uesRef is another react hook. It keeps a counts how many times we've re-render a resource.
    // 35. as soon as this element rendered on the page, it will call our callback function and pass that element to our callback function. 
  return <div id="container" ref={wrapper}>
      This is the text editor
  </div>;
}
