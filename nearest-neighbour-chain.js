/**
 * This is the nearest neighbour chain algorithm
 * It takes an array of points and returns the shortest path that visits all points in the array in order.
 * It is a greedy algorithm that starts at the first point and then visits the nearest point to the current point.
 *
 * The nearest neighbour algorithm was one of the first algorithms used to solve the travelling salesman problem approximately. In that problem, the salesman starts at a random city and repeatedly visits the nearest city until all have been visited. The algorithm quickly yields a short tour, but usually not the optimal one.
 *
 * The algorithm is O(n^2) in time complexity.
 *
 * @see https://en.wikipedia.org/wiki/Nearest_neighbour_algorithm
 * @param {number[][]} points
 */
