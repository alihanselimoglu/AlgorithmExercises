/****************************************************************
 *             CODERBYTE STAR RATING CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StarRating(str) take the str parameter     *
 * being passed which will be an average rating between         *
 * 0.00 and 5.00, and convert this rating into a list of 5 image*
 * names to be displayed in a user interface to represent the   *
 * rating as a list of stars and half stars. Ratings should be  *
 * rounded to the nearest half. There are 3 image file names    *
 * available: "full.jpg", "half.jpg", "empty.jpg".              *
 * The output will be the name of the 5 images                  *
 * (without the extension), from left to right, separated by    *
 * spaces.                                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "0.38"                                              *
 * Output 1: half empty empty empty empty                       *
 *                                                              *
 * Input 2: "4.5"                                               *
 * Output 2: full full full full half                           *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 77.9% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

export const StarRating = (str) => {
  let num = Math.round(Number(str) * 2) / 2;
  let string = '';

  for (let i = 5; i > 0; i--) {
    if (num >= 1) string = string + 'full';
    else if (0 < num && num < 1) string = string + 'half';
    else string = string + 'empty';

    if (i != 1) string = string + ' ';

    num--;
  }

  return string;
};
